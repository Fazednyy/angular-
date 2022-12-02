import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  search: string = '';

  ad: any = [];

  room: boolean = false;
  singUp: boolean = true

  isLoaded: boolean = false;

  isSuccess: boolean = false;

  sign: boolean = true;

  constructor(
    private api: ServiceService,
    private router: Router,
    private userService: UserService) { };
  ngOnInit(): void {
    console.log(this.userService.room)
    this.isLoaded = false;
    this.api.getJSON().subscribe((data) => {
      this.ad = data;

      this.room = this.userService.room
      this.singUp = this.userService.singUp

      console.log('profile', this.room)
console.log('singUp' ,this.singUp)
      this.isLoaded = true;
      this.isSuccess = true;
    }, error => {
      this.isLoaded = true
      this.isSuccess = false
    })

  };


  navigatePost(id: number) {
    this.router.navigateByUrl('ad' + '/' + id)
  };



};
