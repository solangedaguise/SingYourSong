import { Component, Input, OnInit } from '@angular/core';
import { MenuElem } from 'src/app/model/menu-elem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuPrincipal!: MenuElem;
  @Input() icone: string = 'build';
  @Input() subMenus: MenuElem[] = [];
  isShowing = true;
  isExpanded = true;
  showSubmenu: boolean = false;
  
  showSubSubMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
