
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




// import { Component, OnInit, Input,OnChanges, SimpleChanges } from '@angular/core';
// import { Category, Products } from './products.interface';
// import { ProductsService } from 'src/app/products.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.scss'],
// })
// export class ProductsComponent implements OnInit,OnChanges {
//   @Input() products: Products[] = [];
//   categorySelected: string = 'todas';
//   showModal: boolean = false;
//   selectedId: number = 0;
//   productFiltered: Products[] = [];
//   selectedCategory: Category[] = [];

//   constructor(private productService: ProductsService) {}
  
//   ngOnChanges(changes : SimpleChanges): void {
//     if(this.products){
//       this.productFiltered = this.products;
//     }
//   }

//   ngOnInit(): void {
//   this.getCategories();
//   }

//   openModal(id: number): void {
//     this.selectedId = id;
//     this.showModal = true;
//   }
//   closeModal(event: boolean) {
//     this.showModal = event;
//   }

//   filterByCategory(): void {
//     if (this.categorySelected !== 'todas') {
//       this.productFiltered = this.products.filter((producto) => {
//         return producto.category.name === this.categorySelected;
//       });
//     } else {
//       this.productFiltered = this.products;
//     }
//   }

//   private getCategories(): void {
//     this.productService.getCategories().subscribe((categories: Category[]) => {
//       if (categories) {
//         console.log(categories); 
//         this.selectedCategory = categories;
//       }
      
//     });
//   }
// }
