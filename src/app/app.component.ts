import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuElem } from './model/menu-elem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuKaraoke: MenuElem = {
    nomMenu: "Karaoke",
    liensMenu : "/tour-karaoke"
  }
  menuAdmin: MenuElem = {
    nomMenu: "Administration",
    liensMenu : "/administration"
  }
  subMenusAdmin: MenuElem[] = [{
    nomMenu: "Musiques",
    liensMenu : "/musiques"
  },{
    nomMenu: "Joueurs",
    liensMenu : "/joueurs"
  },{
    nomMenu: "Photos",
    liensMenu : "/photos"
  }];

  title = 'SingYourSong';
  display: boolean = true;
  showFiller = false;
  public toggleButtons(){
    this.display = !this.display
    console.log(this.display);
  }
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  
  showSubmenu: boolean = false;
  isShowing = false;
  
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
