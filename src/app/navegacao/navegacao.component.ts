import { NavegacaoService } from './../servicosInterface/navegacao.service';
import { MenuNavegador } from './../modelosInterface/menu-navegador';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, catchError, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  //itens do Menu principal
  tituloNav = "BookShelf v1";
  // itens da Barra superior
  // itens de icones e imagens de navegação
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone=80;
  aIcone=80;
  //controle das rotas do menu
  itensMenu$: Observable<MenuNavegador[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navegacaoService: NavegacaoService) {
      this.itensMenu$ = navegacaoService.listagemMenu()
      .pipe(
        catchError (error => {
          return of([])
        })
      )
    }
}
