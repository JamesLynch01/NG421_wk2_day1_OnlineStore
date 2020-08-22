import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: IProduct;

  @Output() productAdded: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  onProductAdded(): void{
    this.productAdded.emit(this.product);
  }

  constructor() { }

  ngOnInit() {
  }

}
