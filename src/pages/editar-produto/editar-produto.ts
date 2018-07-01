import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';

/**
 * Generated class for the EditarProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-produto',
  templateUrl: 'editar-produto.html',
})
export class EditarProdutoPage {

  produto: Produto;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private produtosProvider: ProdutosProvider,
  private toast: ToastController) {
      this.produto = new Produto();
      this.produto = this.navParams.get("produto");      
  }

  editarProduto(){
    console.log(this.produto);
    this.produtosProvider.updateProduto(this.produto).subscribe(
      data => {
        this.toast.create({message: 'Produto ' +this.produto.nome +' criado com sucesso!', position: 'botton', duration: 3000}).present();
      }, error => {
        this.toast.create({message: 'Produto ' +this.produto.nome +' não foi criado!', position: 'botton', duration: 3000}).present();
      }
    )
    this.navCtrl.pop();
  }

}

export class Produto {
  codigo: any;
  nome: string;
  codigoBarras: string;
  tempo: string;
}
