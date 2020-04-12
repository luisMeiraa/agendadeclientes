import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'adicionar-cliente',
    loadChildren: () => import('./pages/adicionar-cliente/adicionar-cliente.module').then( m => m.AdicionarClientePageModule)
  },
  {
    path: 'ficha-cliente',
    loadChildren: () => import('./pages/ficha-cliente/ficha-cliente.module').then( m => m.FichaClientePageModule)
  },
  {
    path: 'adicionar-marcacao',
    loadChildren: () => import('./pages/adicionar-marcacao/adicionar-marcacao.module').then( m => m.AdicionarMarcacaoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'resgisto',
    loadChildren: () => import('./pages/resgisto/resgisto.module').then( m => m.ResgistoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
