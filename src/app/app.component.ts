import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from './../pages/home/home';
import { MenuTestePage } from './../pages/menu-teste/menu-teste';
import { GeneratedTestPage } from '../pages/generated-test/generated-test'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = TabsPage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestePage, title: 'Menu Teste', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Page', icon: 'home'},
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any, menuSide: string) : void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }

  menuOpened() : void {
    console.log('Abriu');
  }
}
