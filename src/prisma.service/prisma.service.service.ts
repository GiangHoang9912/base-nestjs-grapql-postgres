import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaServiceService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
}
