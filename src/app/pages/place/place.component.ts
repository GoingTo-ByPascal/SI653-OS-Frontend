import { Component, OnInit, TemplateRef} from '@angular/core';

import {TipService} from "../../services/tip.service";
import {Tip} from "../../model/tip";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";
import {Locatable} from "../../model/locatable";
import {LocatableService} from "../../services/locatable.service";
import {FavouriteService} from "../../services/favourite.service";
import {Router} from "@angular/router";
import {ReviewService} from "../../services/review.service";
import {Review} from "../../model/review";
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {Profile} from "../../model/profile";
import {ProfileService} from "../../services/profile.service";


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {


  tplaceid: number = this.tplaceService.placeid;
  button:string="Save";
  place:Tplace;
  locatable:Locatable;
  tip:Tip[];
  review:Review[];
  profile: Profile;
  profiles:Profile[];
  constructor(public tipService:TipService, public tplaceService:TplaceService,
              public locatableService: LocatableService,public favouriteService:FavouriteService,
              private router:Router, private reviewService:ReviewService,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.tipService.getTips().subscribe(
      (tip)=> this.tip=tip
    );
    this.tplaceService.getTplace().subscribe(
      tplace=> this.place=tplace
    );
    this.locatableService.getLocatable((this.tplaceid+6)).subscribe(
      locatable=> this.locatable=locatable
    );
    this.reviewService.getreviewsbylocatableid(20).subscribe(
      review=>this.review=review
    );

    this.profileService.getUsers().subscribe(
      profiles=>this.profiles=profiles
    )


  }

  post(){
    this.button="Unsave";

    this.favouriteService.favourite.locatableId=this.locatable.id
    this.favouriteService.favourite.userId=4
    this.favouriteService.save().subscribe(

      response => this.router.navigate(['favourites'])
    )
  }

  mostrarreviews(id:number){

    for(let i=0;i<this.profiles.length;i++){
      if(this.profiles[i].userId==id){
        this.profile=this.profiles[i];
      }
    }

  }


}
