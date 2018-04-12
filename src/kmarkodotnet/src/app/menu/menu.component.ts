import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { Menu } from '../model/menu.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css','../app.component.css','../../../node_modules/font-awesome/css/font-awesome.css']
})
export class MenuComponent implements OnInit {
  public menuItems : Menu[];
  public selectedMenuItem:Menu;

  constructor() { }

  ngOnInit() {
    this.menuItems = new Array<Menu>();
    this.menuItems.push(new Menu('Home','fa fa-home fa-2x',"/home" ));
    this.menuItems.push(new Menu('Experiences','fa fa-history fa-2x',"/experiences"));
    this.menuItems.push(new Menu('Skills','fa fa-code fa-2x',"/skills"));
    this.menuItems.push(new Menu('Family','fa fa-heart fa-2x',"/family"));
    this.menuItems.push(new Menu('Contact','fa fa-envelope fa-2x',"/contact"));
  }

  onSelect(menuItem:Menu){
    this.selectedMenuItem = menuItem;
  }
}
