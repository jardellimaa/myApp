import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
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

  private produto: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private produtoProvider: ProdutosProvider,
    private alertCtrl: AlertController,
    private toast: ToastController) {
      this.produto = this.navParams.get("produto");
      this.carregardoBanco();
  }

  carregardoBanco(){
    this.produtoProvider.getProduto(this.produto.codigo).subscribe(
      data=>{
        this.produto = data as any;
      }, error =>{

      }
    )
  }

  excluir() {
    let alert = this.alertCtrl.create({
      title: 'Excluir ' +this.produto.nome,
      message: 'Deseja mesmo excluir o produto?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Não excluído');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Excluído');
            this.removerProduto();
          }
        }
      ]
    });
    alert.present();
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

  ionViewWillEnter() {
    this.produto = this.navParams.get("produto");
    this.carregardoBanco();
  }

}
