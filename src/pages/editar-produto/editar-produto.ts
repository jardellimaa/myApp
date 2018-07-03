import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { NgForm } from '@angular/forms';

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

  private produto: Produto;
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider,
    private alertCtrl: AlertController,
    private toast: ToastController) {
    this.produto = new Produto();
    this.produto = this.navParams.get("produto");
    console.log(this.produto);
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
  }

  ionViewWillUnload(){
  }

  editarProduto() {
    if (this.form.form.valid) {
      console.log(this.produto);
      this.produtosProvider.updateProduto(this.produto).subscribe(
        data => {
          this.toast.create({ message: 'Produto ' + this.produto.nome + ' editado com sucesso!', position: 'botton', duration: 3000 }).present();
        }, error => {
          this.toast.create({ message: 'Produto ' + this.produto.nome + ' não foi editado!', position: 'botton', duration: 3000 }).present();
        }
      )
      this.navCtrl.pop();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Insira os dados',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              console.log('Insira os dados');
            }
          }
        ]
      });
      alert.present();
    }
  }

}

export class Produto {
  codigo: any;
  nome: string;
  codigoBarras: string;
  tempo: string;
}
