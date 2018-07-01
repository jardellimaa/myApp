import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProdutosProvider } from '../../providers/produtos/produtos';
import { ProdutoDetalhesPage } from '../produto-detalhes/produto-detalhes';
import { CadastroProdutosPage } from '../cadastro-produtos/cadastro-produtos';

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

  public loader;
  public lista_produtos = new Array<any>();
  public refresher;
  public isRefreshing : boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtosProvider: ProdutosProvider,
    public loadingCtrl: LoadingController) {
  }

  abrirCadastro(){
    this.navCtrl.push(CadastroProdutosPage);
  }

  abrirDetalhes(produto){
    //console.log(produto);
    this.navCtrl.push(ProdutoDetalhesPage, { produto: produto} );
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarProdutos();
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  ionViewDidEnter() {
    this.carregarProdutos();
  }

  carregarProdutos(){
    //this.abreCarregando();
    this.produtosProvider.getProdutos().subscribe(
      data=>{
        //console.log(data);
        this.lista_produtos = data as any;
        //this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      },
      error=>{
        //console.log(error);
        //this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }
}
