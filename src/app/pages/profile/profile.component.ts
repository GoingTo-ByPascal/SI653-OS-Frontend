import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:User;
  constructor(private userService:UserService) { }

  ngOnInit(){
    this.userService.getUser(1).subscribe(
      (profile)=> this.profile=profile
    )
  }

}
