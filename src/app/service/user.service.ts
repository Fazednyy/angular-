import { Injectable } from '@angular/core';
import { User } from './interfaces';
import { ServiceService } from './service.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // id для входящего
  id: any = 0;

  // изчезающие компоненты Main
  room: boolean = false;
  singUp: boolean = true;


  // массив с объектами для fun
  users: any = [];

  constructor(private api: ServiceService) { };

  // функция входа
  validateUser(email: string, password: string): boolean {

    this.api.getUsers().subscribe((data) => {
      this.users = data
    });
    for (let obj of this.users) {
      if (email == obj.email && password == obj.password) {
        return true
      };
    };
    return false
  };

  // функция для профиля 
  getUser(email: string) {
    this.api.getJson().subscribe((data) => {
      this.users = data;

      for (let obj of this.users) {
        if (email == this.users.email) {
          return obj
        };
      };
    });

  };
};




