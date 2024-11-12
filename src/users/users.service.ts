import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Ana',
      instituto: 'cct',
      contact: 'cel/mail',
    },
  ];
  findAll() {
    return this.users;
  }
}
