import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the ListaprodutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaprodutos',
  templateUrl: 'listaprodutos.html',
})
export class ListaprodutosPage {

  public lista_produtos = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider) {
  }

  ionViewDidLoad() {
    this.produtosProvider.getProdutos().subscribe(
      data=>{
        //console.log(data);
        this.lista_produtos = data as any;
      },
      error=>{
        //console.log(error);
      }
    )
  }
}
