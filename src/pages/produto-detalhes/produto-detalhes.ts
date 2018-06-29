import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-detalhes',
  templateUrl: 'produto-detalhes.html',
})
export class ProdutoDetalhesPage {

  public produto;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.produto = this.navParams.get("produto");
    //console.log(this.produto);
  }

}
