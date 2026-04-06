import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Products } from '../products/products.interface';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss'],
})
export class CardsDetailsComponent implements OnInit {
  @Input() seleccionaId!: number;
  @Output() mostrarModal = new EventEmitter<boolean>();
  estadoModal: boolean = false;
  detalleProducto!: Products;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
   if (this.seleccionaId) {
      this.productsService.getProduct(this.seleccionaId).subscribe({
        next: (data: Products) => {
         console.log(data);
         this.detalleProducto = data;
         
        }
      })
    }
  }
  
  cerrarModal() {
    this.mostrarModal.emit(this.estadoModal);
  }
}
