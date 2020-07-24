import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PizzaDto } from '../dto/pizza.dto';
import { ShoppingCartItem } from '../models/shopping-cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItems: ShoppingCartItem[] = [];
  private items$ = new BehaviorSubject<ShoppingCartItem[]>(this.cartItems);

  public get cartItems$(): Observable<ShoppingCartItem[]> {
    return this.items$.asObservable();
  }

  public get totalItemsInCart$(): Observable<number> {
    return this.cartItems$.pipe(map((items) => items.reduce((a, b) => a + b.quantity, 0)));
  }

  public getQuantityInShoppingCart(item: PizzaDto): Observable<number> {
    return this.cartItems$.pipe(map(() => this.findItemInCart(item)?.quantity || 0));
  }

  public addToCart(item: PizzaDto, quantity: number): void {
    const sameItemInCart = this.findItemInCart(item);

    if (sameItemInCart) {
      sameItemInCart.quantity += quantity;
    } else {
      this.cartItems.push({ item, quantity });
    }

    this.updateItemsInShoppingCart();
  }

  public removeFromCart(item: PizzaDto): void {
    const itemInCart = this.findItemInCart(item);

    if (!itemInCart) {
      return;
    }

    if (!--itemInCart.quantity) {
      this.cartItems = this.cartItems.filter((i) => i.item.id !== item.id);
    }

    this.updateItemsInShoppingCart();
  }

  public emptyCart(): void {
    this.cartItems = [];
    this.updateItemsInShoppingCart();
  }

  private findItemInCart(item: PizzaDto): ShoppingCartItem | undefined {
    return this.cartItems.find((i) => i.item.id === item.id);
  }

  private updateItemsInShoppingCart(): void {
    this.items$.next([...this.cartItems]);
  }
}
