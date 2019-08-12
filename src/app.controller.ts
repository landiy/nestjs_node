import { Controller, Get,Post, Header, HttpCode,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/resOfGet')
  // @HttpCode(400)
  @Header('Access-Control-Allow-Origin','*') 
  private async resOfGet(): Promise<any> {
    return {
      code: 0,
      msg: 'response from ldy-node',
      data: [1, 2, 3, 4, 5]
    }
  }

  @Post('/report')
  @Header('Access-Control-Allow-Origin','*') 
  private async report(@Body() data):Promise<any>{
    console.log(data)
    // this.appService.report(data)
  }
}
