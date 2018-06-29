import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  url = "http://localhost:8080/produtos";

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getProdutos(){
    return this.http.get(this.url);
  }

  getProduto(){
    return this.http.get(this.url +"/1");
  }
}
