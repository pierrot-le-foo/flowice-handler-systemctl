import { Service } from "./types";
import { exec } from "child_process";

export async function restart(service: Service) {
  const command = `systemctl restart ${service.options.serviceName}`;
  exec(command);
}
