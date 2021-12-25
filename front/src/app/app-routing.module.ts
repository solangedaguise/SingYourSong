import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TourKaraokeComponent } from './tour-karaoke/tour-karaoke.component';

const routes: Routes = [
  { path: 'tour-karaoke', component: TourKaraokeComponent },
  { path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
