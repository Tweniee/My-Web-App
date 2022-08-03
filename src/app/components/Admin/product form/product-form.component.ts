import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  previewData = {};
  allCategories: any;
  productProfile = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    price: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    tags: new FormControl('', Validators.required),
    stock_keepingUnit: new FormControl('', Validators.required),
    enableProduct: new FormControl(false, [Validators.required]),
    category: new FormControl('', [Validators.required]),
    quantity: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required]),
  });
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    setTimeout(() => {
      this.previewData = this.productProfile.value
    }, 100);
  }
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.previewData = {
      productName: '', 
      price: '', 
      tags: '', 
      stock_keepingUnit: '', 
      enableProduct: false, 
      category: '', 
      quantity: '', 
      status: '', 
      description: '', 
    }
    this.getCategory()
  }
  getCategory(){
    this.service.getAllProductsCategory().subscribe(data=>{
      this.allCategories = data
    })
  }
  submit() {
    this.service.createProduct(this.productProfile.value).subscribe(data=>{
      console.log(data)
    })
  }
}
