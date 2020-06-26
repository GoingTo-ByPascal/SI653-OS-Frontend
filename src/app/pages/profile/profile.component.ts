import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {LocatableService} from "../../services/locatable.service";
import {Locatable} from "../../model/locatable";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:User;
  constructor(private userService:UserService, private profileService:ProfileService) { }

  ngOnInit(){

    this.userService.getUser(1).subscribe(
      profile=>this.profile=profile
    )

  }

}
