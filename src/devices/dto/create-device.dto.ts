import { Prop } from "@nestjs/mongoose";

export  class CreateDeviceDto {
  readonly  ip: string;
  readonly  time: number;
  readonly  location: string;
  readonly  function: string;
  readonly  title: string;
  readonly  networks: string;
}