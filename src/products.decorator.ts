import { SetMetadata } from '@nestjs/common';

export const Products = (...args: string[]) => SetMetadata('products', args);
