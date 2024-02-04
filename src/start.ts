import { Service } from "./types";
import { exec } from "child_process";

export async function start(service: Service) {
  const command = `systemctl start ${service.options.serviceName}`;
  exec(command);
}
