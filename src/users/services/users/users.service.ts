import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IUserData } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Saidabror', email: 'nizamkhujaev@gmail.com', id: 1 },
    { username: 'Polat', email: 'Polat@gmail.com', id: 2 },
    { username: 'Sardor', email: 'Sardor@gmail.com', id: 3 },
    { username: 'Odil', email: 'Odil@gmail.com', id: 4 },
    { username: 'Javohir', email: 'Javohir@gmail.com', id: 5 },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(user: IUserData) {
    const lastId = this.fakeUsers.at(-1).id;
    this.fakeUsers.push({ ...user, id: lastId + 1 });
    return {
      users: this.fakeUsers,
      newUser: user,
    };
  }

  fetchUserById(id: number) {
    const foundUser = this.fakeUsers.find((item) => item.id === id);

    if (!foundUser) {
      throw new HttpException('User not defined', HttpStatus.BAD_REQUEST);
    }

    return foundUser;
  }
}
