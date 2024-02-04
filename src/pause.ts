import { exec } from "child_process";
import { Service } from "./types";

export async function pause(service: Service) {
  const command = `systemctl pause ${service.options.serviceName}`;
  exec(command);
}
