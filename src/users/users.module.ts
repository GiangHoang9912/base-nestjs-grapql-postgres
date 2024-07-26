import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PrismaServiceService } from 'src/prisma.service/prisma.service.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaServiceService]
})
export class UsersModule { }
