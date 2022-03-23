import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TourKaraokeComponent } from './tour-karaoke/tour-karaoke.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrenomComponent } from './tour-karaoke/prenom/prenom.component';
import { VideoComponent } from './tour-karaoke/video/video.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MenuItemComponent } from './shared/components/menu-item/menu-item.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminJoueurComponent, DialogEditJoueurDialog } from './domain/chanteur/admin-joueur/admin-joueur.component';
import { AdminChansonComponent } from './domain/chanson/admin-chanson/admin-chanson.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableFilterPipe } from './domain/chanson/admin-chanson/TableChansonFilterPipe';

@NgModule({
  declarations: [
    AppComponent,
    TourKaraokeComponent,
    PrenomComponent,
    VideoComponent,
    SideNavComponent,
    MenuItemComponent,
    AccueilComponent,
    AdminChansonComponent,
    AdminJoueurComponent,
    DialogEditJoueurDialog,
    TableFilterPipe
  ],
  imports: [
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
