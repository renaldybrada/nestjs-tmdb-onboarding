import { Module } from "@nestjs/common";
import { OrdersController, SchedulesController } from "./transactions.controller";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieSchedules } from "src/database/entities/movies/movieSchedules.entity";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([MovieSchedules])
    ],
    controllers: [
        SchedulesController,
        OrdersController
    ]
})
export class TransactionsModule {}