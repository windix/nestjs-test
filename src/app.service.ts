import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getHello() {
    const result = await this.httpService
      .get<string>('https://ifconfig.co/ip')
      .toPromise();
    return result.data;
  }
}
