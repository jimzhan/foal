import { Get, HttpResponseOK } from '@foal/core';

export class AppController {

  @Get('/')
  index() {
    return new HttpResponseOK('hello');
  }

}