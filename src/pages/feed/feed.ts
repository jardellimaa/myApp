import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
     nome:"Taynah Costa",
     data:"Junho 9, 2018",
     descricao:"Eu sou especial e incrível!",
     qntd_likes: 999,
     qntd_coments: 200,
     time_coment: "1h ago"
  }

  //public lista_produtos = new Array<any>();

  public nome_usuario:string = "Jardel Lima";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private produtosProvider: ProdutosProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    /*this.produtosProvider.getProdutos().subscribe(
      data=>{
        console.log(data);
        this.lista_produtos = data as any;
      },
      error=>{
        console.log(error);
      }
    )*/
  }

}
