import { Injectable } from '@nestjs/common';
import { PrismaServiceService } from 'src/prisma.service/prisma.service.service';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaServiceService) { }

  async findAll() {
    return this.prismaService.credentials.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.credentials.findUnique({
      where: { id: id }
    });
  }ƒ

  async create(data: any) {
    return this.prismaService.credentials.create({
      data
    });
  }

  async update(id: string, data: any) {
    return this.prismaService.credentials.update({
      where: { id: id },
      data: data
    });
  }

  async remove(id: string) {
    return this.prismaService.credentials.delete({
      where: { id: id }
    });
  }
}
