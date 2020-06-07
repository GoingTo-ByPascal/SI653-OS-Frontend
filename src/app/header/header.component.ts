import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title1: string = 'GoingTo';
  title2: string = 'Search';
  title3: string = 'Explore';
  title4: string = 'Itinerary';
  title5: string = 'Notifications';
  title6: string = 'User';

  constructor() {
  }


}
