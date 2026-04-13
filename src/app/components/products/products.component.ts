import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Products } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() products: Products[] = [];
  showModal: boolean = false;
  selectedId: number = 0;
  categorySelected: string = 'todas';
  productFiltered: Products[] = [];
  categories: string[] = [
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
  ];

  constructor() {}

  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.productFiltered = this.products;
    }
  }

  openModal(id: number): void {
    this.selectedId = id;
    this.showModal = true;
  }
  closeModal(event: boolean) {
    this.showModal = event;
  }
  filterByCategory(): void {
    if (this.categorySelected !== 'todas') {

      this.productFiltered = this.products.filter((product) => {
        return product.category === this.categorySelected;
      });
    } else {
      this.productFiltered = this.products;
    }
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
