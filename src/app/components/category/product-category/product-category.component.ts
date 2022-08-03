import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../Admin/products.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  categoryProfile = new FormGroup({
    categoryName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    description: new FormControl('',Validators.required),
    subCategory: new FormControl("No",Validators.required),
  });

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }
  

  onSubmit(){
   this.service.createCategory(this.categoryProfile.value).subscribe(res=>{
    console.log(res)
   })
  }

}
