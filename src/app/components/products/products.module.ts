import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CardsModule } from '../cards/cards.module';
import { CardsDetailsModule } from '../cards-details/cards-details.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    CardsModule,
    CardsDetailsModule,
],
  exports:[ProductsComponent]
})
export class ProductsModule { }
