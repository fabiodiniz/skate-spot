import { Injectable } from '@nestjs/common'

export type User = {
  uid: number
  email: string
  password: string
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      uid: 1,
      email: 'john@skatespot.com.br',
      password: 'temporary',
    },
    {
      uid: 2,
      email: 'maria@skatespot.com.br',
      password: 'temporary',
    },
  ]

  async findOne(email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }
}
