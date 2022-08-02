import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // products = new FormArray([]);
  productProfile = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    tags: new FormControl('', Validators.required),
    stock_keepingUnit: new FormControl('', Validators.required), 
    enableProduct: new FormControl(false, [Validators.required]),
    category: new FormControl('', [Validators.required]),
    quantity: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required]),
    // category: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void { 
  }
  submit(){
    console.log(this.productProfile.value);
  }
}
