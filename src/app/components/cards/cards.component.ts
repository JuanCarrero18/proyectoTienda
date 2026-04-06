import { Component, OnInit, Input, Output} from '@angular/core';
import { Products } from '../products/products.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 
  @Input() productsCard!: Products;
  

  constructor() { }

  ngOnInit(): void {
  }

 

}
