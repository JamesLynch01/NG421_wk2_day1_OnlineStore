import { Component } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<IProduct>;

  constructor(private ProductService: ProductService){

  }

  ngOnInit() {
    this.products = this.ProductService.getProducts();
  }

  productWasAdded(product: IProduct){
    this.ProductService.addToCart(product);
  }
}
