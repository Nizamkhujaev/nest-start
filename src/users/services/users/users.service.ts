import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Saidabror', email: 'nizamkhujaev@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
}
