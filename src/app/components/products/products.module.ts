import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CardsModule } from '../cards/cards.module';
import { CardsDetailsModule } from '../cards-details/cards-details.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, CardsModule, CardsDetailsModule,FormsModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ProductsComponent } from './products.component';
// import { CardsModule } from '../cards/cards.module';
// import { CardsDetailsModule } from '../cards-details/cards-details.module';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [ProductsComponent],
//   imports: [
//     CommonModule,
//     CardsModule,
//     CardsDetailsModule,
//     FormsModule
// ],
//   exports:[ProductsComponent]
// })
// export class ProductsModule { }
