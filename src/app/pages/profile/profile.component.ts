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
  profile:Profile;
  constructor(private userService:UserService, private profileService:ProfileService) { }

  ngOnInit(){

    this.profileService.getUserprofile(1).subscribe(
      profile=>this.profile=profile
    )

  }

}
