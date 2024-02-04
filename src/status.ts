import { Service } from "./types";
import { exec } from "child_process";
import { promisify } from "util";

export async function status(service: Service) {
  const command = `systemctl is-active ${service.options.serviceName}`;
  try {
    const { stdout } = await promisify(exec)(command);
    return stdout.trim() === "active";
  } catch (error) {
    return false;
  }
}
