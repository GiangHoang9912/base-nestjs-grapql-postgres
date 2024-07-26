import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from './model/users.model';
import { CreateUserDto } from './dto/users.dto';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => [Users])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => Users)
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => Users)
  async createUser(@Args('data') data: CreateUserDto) {
    return this.usersService.create(data);
  }
}
