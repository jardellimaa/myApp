import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { EditarProdutoPage } from '../editar-produto/editar-produto';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private produtoProvider: ProdutosProvider,
    private toast: ToastController) {
  }

  abrirEdicao(){
    this.navCtrl.push(EditarProdutoPage, { produto: this.produto });
    console.log(this.produto);
  }

  removerProduto(){
    this.produtoProvider.deleteProduto(this.produto.codigo).subscribe(
      data =>{
        this.toast.create({message: 'Produto ' +this.produto.nome +' removido com sucesso!', position: 'botton', duration: 3000}).present();
      }, error => {
        this.toast.create({message: 'Produto ' +this.produto.nome +' removido com sucesso!', position: 'botton', duration: 3000}).present();
      })
    this.navCtrl.pop();
  }

  ionViewDidEnter() {
    this.produto = this.navParams.get("produto");
    //console.log(this.produto);
  }

}
