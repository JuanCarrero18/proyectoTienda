import { Component, OnInit, Input } from '@angular/core';
import { Products } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() products: Products[] = [];
  showModal: boolean = false;
  selectedId: number = 0;

  constructor() {}

  ngOnInit(): void {}

  openModal(id : number): void {
    this.selectedId = id;
    this.showModal = true;
  }
  closeModal(event : boolean){
   this.showModal = event;
  }
}
