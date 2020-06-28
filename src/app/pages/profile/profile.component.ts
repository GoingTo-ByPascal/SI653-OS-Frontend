import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {LocatableService} from "../../services/locatable.service";
import {Locatable} from "../../model/locatable";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../model/profile";
import {CountryService} from "../../services/country.service";
import {Country} from "../../model/country";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  profile:Profile= new Profile();
  country: Country= new Country();
  constructor(private userService:UserService, public profileService:ProfileService, public countryService:CountryService) { }

  ngOnInit(){

    this.userService.getUser(4).subscribe(
      user=>this.user=user
    );
    this.profileService.getUserprofilebyUserid(4).subscribe(
      profile=>this.profile=profile
    )

  }


  loadcountry(id){
    this.countryService.getcountrybyid(id).subscribe(
      country=>this.country=country
    )
  }
}
