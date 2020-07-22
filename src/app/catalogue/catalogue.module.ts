import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueItemComponent } from './catalogue-item/catalogue-item.component';
import { CataloguePreviewItemComponent } from './catalogue-preview-item/catalogue-preview-item.component';

@NgModule({
  declarations: [CatalogueComponent, CatalogueItemComponent, CataloguePreviewItemComponent],
  imports: [CommonModule, CatalogueRoutingModule],
})
export class CatalogueModule {}
