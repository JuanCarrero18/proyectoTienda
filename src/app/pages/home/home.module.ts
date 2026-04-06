import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardsModule } from 'src/app/components/cards/cards.module';
import { ProductsModule } from 'src/app/components/products/products.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    ProductsModule,
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
