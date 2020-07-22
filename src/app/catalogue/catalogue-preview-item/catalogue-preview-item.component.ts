import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';

import { PizzaDto } from 'src/app/shared/dto/pizza.dto';
import { PizzaPriceService } from 'src/app/shared/pizza-price/pizza-price.service';

@Component({
  selector: 'app-catalogue-preview-item',
  templateUrl: './catalogue-preview-item.component.html',
  styleUrls: ['./catalogue-preview-item.component.scss'],
})
export class CataloguePreviewItemComponent {
  @Input() set item(pizza: PizzaDto) {
    this.pizza = pizza;
    this.price$ = this.pizzaPriceService.getPizzaPrice(pizza);
  }

  @Output() closePreview = new EventEmitter<void>();

  public pizza!: PizzaDto;
  public price$!: Observable<number>;

  constructor(
    private eRef: ElementRef,
    private pizzaPriceService: PizzaPriceService
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closePreview.emit();
    }
  }
}
