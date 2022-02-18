import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { User } from "./schemas/user.schema";
import { UpdateUserDto } from "./dto/update-user-dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
  @Get()
  getAll(): Promise<User[]>{
    return this.usersService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id:string): Promise<User> {
    return this.usersService.getById(id)
  }

  @Get(':username')
  findByName(@Param('username') username:string): Promise<User> {
    return this.usersService.findOne(username)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control','none')
  create(@Body() createUserDto:CreateUserDto): Promise<User>{
    return this.usersService.create(createUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string): Promise<User>{
    return this.usersService.remove(id)
  }

  @Put(':id')
  update(@Body() updateUserDto:UpdateUserDto, @Param('id') id:string): Promise<User>{
    return this.usersService.update(id, updateUserDto)
  }
}