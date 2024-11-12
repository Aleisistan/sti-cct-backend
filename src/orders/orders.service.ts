import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [
    {
      name: 'Ana',
      instituto: 'cct',
      contact: 'cel/mail',
      priority: 'high',
      description: 'no enciende pc',
    },
  ];
  findAll() {
    return this.orders;
  }
}
