// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { CatsService } from './cats/cats.service';
// import { CatsController } from "./cats/cats.controller";
// @Module({
//   imports: [],
//   controllers: [CatsController],
//   providers: [CatsService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [CatsModule, UserModule],
  providers: [UserService],
})
export class AppModule {}

