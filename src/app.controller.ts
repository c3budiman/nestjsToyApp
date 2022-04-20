import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateCatDto } from './types/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({
    summary: 'Ping',
  })
  @ApiOkResponse({ description: 'Success' })
  @ApiBadRequestResponse({ description: 'Your Input Is Invalid' })
  @ApiNotFoundResponse({ description: 'The request was not found' })
  @ApiInternalServerErrorResponse({ description: 'Server`s fault' })
  @Post('/ping')
  getTes(@Res() res: Response, @Body() createCatDto: CreateCatDto) {
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Pong',
    });
  }
}
