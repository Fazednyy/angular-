import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  users: any = [];

  newUser: any = {
  id: 0,
  name: "Табиғат",
  email: "tabaksu1204@gmail.com",
  password: "t2a0b0a3",
  tel: 0,
  age: 0
  }
  constructor(private http: HttpClient) { }

  public getUsers() {
    let headers = new HttpHeaders().set("Content-Type", "application/json")

    return this.http.get('assets/users.json', { headers })
  }
  getSignUp() {
    return this.http.get('assets/usrs.json')
  }
  public getUser(id: number) {
    return this.http.get('assets/users.json' + '/' + id)
  }




  public getJSON() {
    let headers = new HttpHeaders().set("Content-Type", "application/json")

    return this.http.get('assets/ad.json', { headers })
  }



  public getJson() {
    return this.http.get('assets/ad.json')
  }



  // public PostUser(){
  //   return this.http.post.('assets/users.json', body)
  // }
}


