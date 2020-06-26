import { Component, OnInit } from '@angular/core';
import {Favourite} from "../../model/favourite";
import {FavouriteService} from "../../services/favourite.service";
import {Locatable} from "../../model/locatable";
import {LocatableService} from "../../services/locatable.service";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  userid:number;
  tplaces:Tplace[];
  locatable:Locatable[];
  locatableid:number;
  tplace:Tplace;



  constructor(private locatableService:LocatableService, public tplaceService:TplaceService, private favouriteService: FavouriteService) { }

  ngOnInit() {
    this.locatableService.getFavourites(4).subscribe(
      (locatable)=>this.locatable=locatable
    )
    this.tplaceService.getTplaces().subscribe(
      tplaces=>this.tplaces=tplaces
    )
    this.post()
  }

  mostrarfavoritos(id:number){

    for(let i=0;i<this.tplaces.length;i++){
      if(this.tplaces[i].id==(id-6)){
        this.tplace=this.tplaces[i];
      }
    }
    }

  click(id:number){

    for(let i=0;i<this.tplaces.length;i++){
      if(this.tplaces[i].id==(id-6)){
        this.tplaceService.placeid=this.tplaces[i].id;
      }
    }
  }


  post(){
    this.favouriteService.favourite.description="caca"
    this.favouriteService.favourite.locatableId=1
    this.favouriteService.favourite.userId=4
    this.favouriteService.save().subscribe()
  }
}
