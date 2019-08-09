import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'product-list', //Rinomina il selettore
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList : Product[]; //the Product[] passed to us

  //outputs the current Product whenever a new Product is selected
  @Output() onProductSelected : EventEmitter<Product>;

  //local state containing the currently selected `Product`
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }


  ngOnInit() {

  }

}
