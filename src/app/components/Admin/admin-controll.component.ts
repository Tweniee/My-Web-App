import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-controll',
  templateUrl: './admin-controll.component.html',
  styleUrls: ['./admin-controll.component.css']
})
export class AdminControllComponent implements OnInit {
  formProduct : any;
  previewProduct : any;
  @ViewChild('productForm',{static: true}) set productFormData(productFormData) {
    this.formProduct = productFormData.value
  }
  @ViewChild('productPreview',{static: true}) set productPreviewData(productPreviewData) {
    // productPreviewData = this.formProduct;
    // console.log(productPreviewData)
  }
  // @ViewChild('productForm',{static: true}) productFormData;
  // @ViewChild('productPreview',{static: true}) productPreviewData;
  constructor() { }

  ngOnInit(): void {
  }
  // AfterViewInit(){
  //   console.log(this.productFormData)
  //   console.log(this.productPreviewData)
  // }

}
