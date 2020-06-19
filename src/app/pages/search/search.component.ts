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
  tplace: Tplace[];
  constructor(private categoryService:CategoryService, private countryService:CountryService, private currencyService:CurrencyService, private  languageService:LanguageService, public tplaceService: TplaceService) { }


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
    this.tplaceService.getTplaces().subscribe(
      (tplace)=> this.tplace=tplace
    );
  }

}
