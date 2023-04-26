import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component'
import { ContatoComponent } from './contato/contato.component'
import { GaleriaComponent } from './galeria/galeria.component'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
