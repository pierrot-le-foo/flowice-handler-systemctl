import { Service } from "./types";
import { exec } from "child_process";

export async function stop(service: Service) {
  const command = `systemctl stop ${service.options.serviceName}`;
  exec(command);
}
