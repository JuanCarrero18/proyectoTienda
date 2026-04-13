import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Products> {
    return this.httpClient.get<Products>(`${this.apiUrl}/${id}`);
  }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Products,Category } from './components/products/products.interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductsService {
//   private apiUrl = 'https://api.escuelajs.co/api/v1';

//   constructor(private httpClient: HttpClient) {}

//   getProducts(): Observable<Products[]> {
//     return this.httpClient.get<Products[]>(`${this.apiUrl}/products`);
//   }

//   getProduct(id: number): Observable<Products> {
//     return this.httpClient.get<Products>(`${this.apiUrl}/products/${id}`);
//   }

//   getCategories(): Observable<Category[]> {
//     return this.httpClient.get<Category[]>(`${this.apiUrl}/categories`);
//   }

// }
