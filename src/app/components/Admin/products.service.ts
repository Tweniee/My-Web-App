import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = environment.URL
  constructor(private http: HttpClient) { }

  createCategory(value : any){
    let header = new HttpHeaders().set(
      "Authorization",
       localStorage.getItem("authToken")
    );
      return this.http.post( this.baseUrl + "createCategory",value, {headers:header})
  }

  getAllProductsCategory(){
    let header = new HttpHeaders().set(
      "Authorization",
       localStorage.getItem("authToken")
    );
    return this.http.get(this.baseUrl + 'getCategory',{headers:header})
  }
  createProduct(json: any){
    let header = new HttpHeaders().set(
      "Authorization",
       localStorage.getItem("authToken")
    );
    return this.http.post(this.baseUrl + 'createProduct',json,{headers:header})
  }
}
