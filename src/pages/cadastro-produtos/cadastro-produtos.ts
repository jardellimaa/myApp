import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro-produtos',
  templateUrl: 'cadastro-produtos.html',
})
export class CadastroProdutosPage {

  private model: Produto;
  @ViewChild('form') form: NgForm;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider,
    private toast: ToastController,
    private alertCtrl: AlertController,
    //private formBuilder: FormBuilder
  ) {
    /*this.cadastroForm = formBuilder.group({
      codigo: [Validators.compose([Validators.required, Validators.min(1)])],
      Nome: [Validators.required],
      codigoBarras: [Validators.required]
    });*/

    this.model = new Produto();
    this.model.nome = "";
    this.model.codigoBarras = "";
  }

  ionViewDidLoad() {

  }

  salvarProduto() {
    if (this.form.form.valid) {
      console.log(this.model);
      this.produtosProvider.saveProduto(this.model).subscribe(
        data => {
          this.toast.create({ message: 'Produto ' + this.model.nome + ' criado com sucesso!', position: 'botton', duration: 3000 }).present();
        }, error => {
          this.toast.create({ message: 'Produto ' + this.model.nome + ' não foi criado!', position: 'botton', duration: 3000 }).present();
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
  nome: string;
  codigoBarras: string;
}
