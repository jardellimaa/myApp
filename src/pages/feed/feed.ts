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
     nome:"Jardel Lima",
     data:"Junho 9, 2018",
     descricao:"Sou Pika!",
     qntd_likes: 10,
     qntd_coments: 10,
     time_coment: "1h ago"
  }

  //public lista_produtos = new Array<any>();

  public nome_usuario:string = "Jardel Lima";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private alertCtrl: AlertController,
    //private produtosProvider: ProdutosProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number):void {
    alert(num1 + num2);
  }

  curtir(){
    this.objeto_feed.qntd_likes++;
  }

  comentar(){
    this.objeto_feed.qntd_coments++;
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
