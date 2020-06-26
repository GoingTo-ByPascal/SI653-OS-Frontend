import { Component, OnInit, Input} from '@angular/core';
import {TipService} from "../../services/tip.service";
import {Tip} from "../../model/tip";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";
import {Locatable} from "../../model/locatable";
import {LocatableService} from "../../services/locatable.service";
import {FavouriteService} from "../../services/favourite.service";


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  tplaceid: number = this.tplaceService.placeid;

  place:Tplace;
  locatable:Locatable;
  tip:Tip[];
  constructor(public tipService:TipService, public tplaceService:TplaceService, public locatableService: LocatableService,public favouriteService:FavouriteService) { }

  ngOnInit(): void {
    this.tipService.getTips().subscribe(
      (tip)=> this.tip=tip
    );
    this.tplaceService.getTplace().subscribe(
      tplace=> this.place=tplace
    );
    this.locatableService.getLocatable((this.tplaceid+6)).subscribe(
      locatable=> this.locatable=locatable
    )
    this.favouriteService.save(4,7).subscribe(
      city=>console.log(city)
    )

  }




}
