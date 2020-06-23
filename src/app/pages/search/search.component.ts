import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../services/category.service";
import {Country} from "../../model/country";
import {CountryService} from "../../services/country.service";
import {Currency} from "../../model/currency";
import {CurrencyService} from "../../services/currency.service";
import {Language} from "../../model/language";
import {LanguageService} from "../../services/language.service";
import {Tplace} from "../../model/tplace";
import {TplaceService} from "../../services/tplace.service";
import {City} from "../../model/city";
import {CityService} from "../../services/city.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  category:Category[];
  country: Country[];
  currency: Currency[];
  language: Language[];
  city: City[];
  tplace: Tplace[];

  //VARIABLES FILTRO
  selectedcity:number;
  prueba:string="caca";


  constructor(private categoryService:CategoryService, private countryService:CountryService, public cityService:CityService, private currencyService:CurrencyService, private  languageService:LanguageService, public placeService: TplaceService) { }


  ngOnInit(){
    this.categoryService.getCategories().subscribe(
      (category)=> this.category=category
    );
    this.countryService.getCountries().subscribe(
      (country)=> this.country=country
    );
    this.currencyService.getCurrencies().subscribe(
      (currency)=> this.currency=currency
    );
    this.languageService.getLanguages().subscribe(
      (language)=> this.language = language
    );

    this.cityService.getCities().subscribe(
      (city)=> this.city=city
    );

    this.placeService.getTplaces().subscribe(
      (tplace)=> this.tplace=tplace
    );
  }

  resultados(event:any){
    this.selectedcity=event.target.value;
    this.placeService.getAllCitiesByPlaceId(this.selectedcity).subscribe(
      (tplace)=> this.tplace=tplace
    );
  }

}
