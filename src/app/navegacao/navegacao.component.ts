import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  //itens do Menu principal
  tituloNav = "BookShelf v1";
  usuario = {userName: 'Matilde Costa', icone: 'remember_me'};
  // itens da Barra superior
  tituloBarra = '[Sua Estante Virtual]';
  // itens de icones e imagens de navegação
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone=80;
  aIcone=80;
  //controle das rotas do menu
  itensMenu = [
    {linkMenu: '/cdd', labelMenu: 'Classes Dewey', hab: true},
    {linkMenu: '/feed', labelMenu: 'Feed Notícias', hab: false },
    {linkMenu: '/clube', labelMenu: 'Página Usuário', hab: false},
    {linkMenu: '/leitura', labelMenu: 'Clubes de Leitura', hab: false},
    {linkMenu: '/estante', labelMenu: 'Estante Particular', hab: false}
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
