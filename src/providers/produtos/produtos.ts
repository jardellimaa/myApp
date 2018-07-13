import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  url = "http://192.168.31.180:8080/produtos/";

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  getProdutos(){
    return this.http.get(this.url);
  }

  getProduto(codigo: any){
    return this.http.get(this.url + codigo);
  }

  saveProduto(produto: any){
    return this.http.post(this.url, produto);
  }

  updateProduto(codigo: any, produto: any){
    return this.http.put(this.url + codigo, produto);
  }

  deleteProduto(codigo: any){
    return this.http.delete(this.url + codigo);
  }
}
