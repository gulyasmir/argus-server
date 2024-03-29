import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UpdateUserDto } from "./dto/update-user-dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  users: any;
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {
  }
  async getAll(): Promise<User[]>{
    return this.userModel.find().exec()
  }

  async getById(id: string): Promise<User>{
    return this.userModel.findById(id)
  }

  async create(userDto: CreateUserDto): Promise<User>{
    const  userModel = new this.userModel(userDto)
    console.log('userModel', userModel)
    return  userModel.save()
  }

  async  remove(id: string): Promise<User>{
    return  this.userModel.findByIdAndRemove(id)
  }

  async  update(id: string, userDto: UpdateUserDto): Promise<User>{
    return  this.userModel.findByIdAndUpdate(id, userDto, {new: true})
  }

  async findOne(username: string): Promise<User | undefined> {
    let users = await this.getAll()
    return users.find(user  => user .username === username);
  }

}
