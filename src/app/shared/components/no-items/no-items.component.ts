import { Component, Input } from '@angular/core';

import { AppRoutes } from 'src/app/app-routing/app-routes.enum';

@Component({
  selector: 'app-no-items',
  templateUrl: './no-items.component.html',
  styleUrls: ['./no-items.component.scss'],
})
export class NoItemsComponent {
  @Input() message = 'Looks like you haven\'t added anything to your cart yet.';
  public routes = AppRoutes;
}
