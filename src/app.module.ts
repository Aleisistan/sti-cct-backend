import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [UsersModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
