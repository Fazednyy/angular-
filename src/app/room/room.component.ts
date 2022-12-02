import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  isLoaded: boolean = false;
  isSuccess: boolean = false;
 users: any = {}
  user: any = {
    id: 0,
    name: "",
    email: "",
    password: "",
    tel: "",
    age: 19
  }


  constructor(
    private router: Router,
    private api : ServiceService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { 
    let id: any = 0

    route.params.subscribe(params => {
      id = params['id']
    })

    if (!isNaN(id)) { // is Not a Number == isNaN
      this.user.id = id
    }

  }



  ngOnInit(): void {
    this.isLoaded = false

    this.api.getUsers().subscribe((data) => {
this.users = data;
this.user = this.users[this.userService.id]
console.log(this.user)
      this.isLoaded = true;
      this.isSuccess = true;
    }, error => {
      this.isLoaded = true
      this.isSuccess = false
    })
  }

  navigatePosts() {
    this.router.navigateByUrl('/main')
  }

}
