import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

@IonicPage()
@Component({
  selector: 'page-cadastro-produtos',
  templateUrl: 'cadastro-produtos.html',
})
export class CadastroProdutosPage {

  model : Produto;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider,
    private toast: ToastController) {

      this.model = new Produto();
      this.model.codigo = "";
      this.model.nome = "";
      this.model.codigoBarras = "";
  }

  ionViewDidLoad() {

  }

  salvarProduto(){
    console.log(this.model);
    this.produtosProvider.saveProduto(this.model).subscribe(
      data => {
        this.toast.create({message: 'Produto ' +this.model.nome +' criado com sucesso!', position: 'botton', duration: 3000}).present();
      }, error => {
        this.toast.create({message: 'Produto ' +this.model.nome +' não foi criado!', position: 'botton', duration: 3000}).present();
      }
    )
    this.navCtrl.pop();
  }

}

export class Produto {
  codigo: any;
  nome: string;
  codigoBarras: string;
}
