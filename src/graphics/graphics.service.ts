import { Injectable } from '@nestjs/common';
import { CreateGraphicDto } from './dto/create-graphic.dto';
import { UpdateGraphicDto } from './dto/update-graphic.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Graphics, GraphicsDocument } from "./schemas/graphics.schema";

@Injectable()
export class GraphicsService {
  constructor(@InjectModel(Graphics.name) private graphicsModel:Model<GraphicsDocument>) {
  }
  create(createGraphicDto: CreateGraphicDto) {
    const  newGraphics = new this.graphicsModel(createGraphicDto)
    return  newGraphics.save()
  }

  findAll(): Promise<Graphics[]> {
    return this.graphicsModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} graphic`;
  }

  update(id: number, updateGraphicDto: UpdateGraphicDto) {
    return `This action updates a #${id} graphic`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphic`;
  }
}
