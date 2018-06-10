import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ListaprodutosPage } from '../listaprodutos/listaprodutos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaprodutosPage;
  tab4Root = FeedPage;

  constructor() {

  }
}
