import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
  HttpStatus,
  HttpCode ,
  Redirect,
  Header
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product-dto";
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }
  @Get()
 // @Redirect('https://yandex.ru/', 301)
  getAll(){
    return this.productsService.getAll()
  }

  @Get(':id')

  getOne(@Param('id') id:string) {
    return this.productsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control','none')
  create(@Body() createProductDto:CreateProductDto){
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string){
    return 'remove' + id
  }

  @Put(':id')
  update(@Body() updateProductDto:UpdateProductDto, @Param('id') id:string){
    return 'update' + id
  }
}
