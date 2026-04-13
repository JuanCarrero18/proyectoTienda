import { Component,OnInit } from '@angular/core';
import { Products } from 'src/app/components/products/products.interface';
import { ProductsService } from 'src/app/components/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    products: Products[]=[];
   
    
  
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
     this.getProducts();
  }
    private getProducts(): void{
    this.productService.getProducts().subscribe(( product: Products[])=>{
      if(product){
        this.products = product;
      }
    })

  }

}
