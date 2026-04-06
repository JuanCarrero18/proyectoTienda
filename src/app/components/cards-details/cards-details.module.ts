import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsDetailsComponent } from './cards-details.component';


@NgModule({
  declarations: [CardsDetailsComponent],
  imports: [
    CommonModule,
  ],
  exports:[CardsDetailsComponent]
})
export class CardsDetailsModule { }
