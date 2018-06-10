import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaprodutosPage } from './listaprodutos';

@NgModule({
  declarations: [
    ListaprodutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaprodutosPage),
  ],
})
export class ListaprodutosPageModule {}
