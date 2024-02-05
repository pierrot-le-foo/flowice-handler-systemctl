import { exec } from "child_process";
import { promisify } from "util";
import { LogsOptions, Service } from "./types";

export async function logs(service: Service, options: LogsOptions) {
  const command = [
    "journalctl",
    "-u",
    service.options.serviceName,
    "-n",
    (options.limit || 100).toString(),
  ];

  if (options.last) {
    command.push("-r");
  } else if (options.since) {
    command.push(
      "-S",
      options.since instanceof Date
        ? options.since.toISOString()
        : options.since
    );
  } else if (options.until) {
    command.push(
      "-U",
      options.until instanceof Date
        ? options.until.toISOString()
        : options.until
    );
  }

  const { stdout } = await promisify(exec)(command.join(" "));

  return stdout;
}
