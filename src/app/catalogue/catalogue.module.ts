import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueItemComponent } from './catalogue-item/catalogue-item.component';


@NgModule({
  declarations: [CatalogueComponent, CatalogueItemComponent],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
