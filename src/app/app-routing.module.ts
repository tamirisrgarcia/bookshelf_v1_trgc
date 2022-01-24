import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro'])

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
