import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  users: any = [];
  user: any = {
    id: 0,
    email: "AlinaK0830@gmail.com",
    password: 'zaq123'
  };


  isLoaded: boolean = false;
  isSuccess: boolean = false;

  sing: boolean = true
  register: boolean = false
  

  room: boolean = true;
  singUp: boolean = true;

  
  newUser: any = {
    id: 0,
    name: "",
    email: "",
    tel: "",
    age: 0,
    password: ''
  };


  constructor(private router: Router,
    private api: ServiceService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { };





  ngOnInit(): void {
    this.isLoaded = false


    this.api.getUsers().subscribe((data) => {
      this.users = data
      console.log(this.users)
      this.isLoaded = true;
      this.isSuccess = true;
    }, error => {
      this.isLoaded = true
      this.isSuccess = false
    })
  };

  send() {
    let result = this.userService.validateUser(this.user.email, this.user.password)
    if (result) {
      for (let obj of this.users) {
        if (this.user.email == obj.email) {
          this.room = true
          this.singUp = false
          this.userService.id = obj.id
          this.router.navigateByUrl('room'+ '/'+  obj.id )
         this.userService.room = this.room
         this.userService.singUp = this.singUp

        }
      }
    }
    else {
     
    }

  };

  sin(){
    this.sing = true
   this.register = false
  }


  reg(){
    this.sing = false;
    this.register = true;
  }




};
