import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserCommand } from './commands/create-user.command';
import { ProcessOrderCommand } from './commands/process-order.command';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User has been created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    const command = new CreateUserCommand(
      createUserDto.email,
      createUserDto.fullName,
      createUserDto.password,
    );
    
    const result = await this.commandBus.execute(command);
    
    return {
      id: result.id,
      email: result.email,
      fullName: result.fullName,
      createdAt: result.createdAt,
    };
  }

  @Post(':userId/orders/:orderId/process')
  @ApiOperation({ summary: 'Process an order' })
  @ApiResponse({ status: 202, description: 'Order processing request accepted' })
  async processOrder(
    @Param('userId') userId: string,
    @Param('orderId') orderId: string,
  ) {
    const command = new ProcessOrderCommand(orderId, userId);
    
    await this.commandBus.execute(command);
    
    return {
      message: 'Order processing initiated',
      orderId,
    };
  }
}
