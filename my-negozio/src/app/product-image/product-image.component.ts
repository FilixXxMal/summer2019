import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
@Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
