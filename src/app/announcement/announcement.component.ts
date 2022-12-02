import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
ad: any = {};

ads: any = {};
isLoaded: boolean = false;
isSuccess: boolean = false
  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    let id: any = 0

    route.params.subscribe(params =>{
      id = params['id']
    })

    if (!isNaN(id)) {
          this.ad.id = id
        }
  }

  ngOnInit(): void {
    this.isLoaded = false
    this.service.getJson().subscribe((data) => {
  this.ads = data
  this.ad = this.ads[this.ad.id - 1]
  console.log('object', this.ad)

      this.isLoaded = true;
      this.isSuccess = true;
    }, error => {
      this.isLoaded = true
      this.isSuccess = false
    })
    console.log(this.ad.id - 1)

  }

}
