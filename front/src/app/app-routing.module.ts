import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminChansonComponent } from './administration/admin-chanson/admin-chanson.component';
import { AdminJoueurComponent } from './domain/chanteur/administration/admin-joueur/admin-joueur.component';
import { TourKaraokeComponent } from './tour-karaoke/tour-karaoke.component';

const routes: Routes = [
  { path: 'tour-karaoke', component: TourKaraokeComponent },
  { path: 'musiques', component: AdminChansonComponent},
  { path: 'joueurs', component: AdminJoueurComponent},
  { path: '**', component: AccueilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
