import { Module } from '@nestjs/common';
import { NetworksService } from './networks.service';
import { NetworksController } from './networks.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Networks, NetworksSchema } from "./schemas/networks.schema";

@Module({
  controllers: [NetworksController],
  providers: [NetworksService],
  imports:[
    MongooseModule.forFeature([
      {name: Networks.name, schema: NetworksSchema}
    ])
  ]
})
export class NetworksModule {}
