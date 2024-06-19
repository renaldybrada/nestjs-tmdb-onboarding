import { Controller, Get, Post } from "@nestjs/common";

@Controller('api/v1/schedules')
export class SchedulesController {
    constructor() {}

    @Get('')
    listStudiosBackoffice() {
        return 'list schedules'
    }
}

@Controller('api/v1/order/checkout')
export class OrdersController {
    constructor() {}

    @Post('')
    listStudiosBackoffice() {
        return 'post order'
    }
}