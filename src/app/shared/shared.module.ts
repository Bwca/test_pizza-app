import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemPriceComponent } from './components/item-price/item-price.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemPriceComponent],
  exports: [ItemPriceComponent],
})
export class SharedModule {}
