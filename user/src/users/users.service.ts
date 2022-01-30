import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { IUser } from './interface/user.interface';

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>)
  {}

  async find(idUser: string): Promise<IUser> {
    const {
      id, 
      first_name, 
      last_name, 
      email } = await this.userRepository.findOne(idUser);

    const response: IUser = {
      id, 
      first_name, 
      last_name, 
      email
    };

    return response;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(user: IUser): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async update(idUser: string, userData: UserEntity): Promise<void> {
    const {
      id,
      first_name,
      last_name,
      email
    } = userData;

    const user = await this.find(idUser);

    user.first_name = first_name ? first_name : user.first_name;
    user.last_name = last_name ? last_name : user.last_name;
    user.email = email ? email : user.email;

    await this.userRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete({id});
  }

}
