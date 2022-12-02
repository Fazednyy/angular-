import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MainComponent } from './main/main.component';
import { RoomComponent } from './room/room.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'room/:id', component: RoomComponent },
  // {path: 'announcement/:id', component: AnnouncementComponent},
  {
    path: "ad/:id", 
    pathMatch: "prefix", 
    children: [
      {
        path: "",
        component: AnnouncementComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
