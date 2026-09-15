import { Component } from '@angular/core';
import { PageShellComponent, SidebarMenuItem, GLOBAL_MENU_ITEMS } from '@fe/ui';
import { ShopComponent } from '../shop/shop.component';
import { ShopRightSidebarComponent } from '../shop-right-sidebar/shop-right-sidebar.component';

@Component({
  standalone: true,
  selector: 'fe-shop-shell',
  imports: [PageShellComponent, ShopComponent, ShopRightSidebarComponent],
  template: `
    <ui-page-shell [menuItems]="menuItems" brandLink="/shop">
      <fe-shop slot="main"></fe-shop>
      <fe-shop-right-sidebar slot="rightbar"></fe-shop-right-sidebar>
    </ui-page-shell>
  `,
})
export class ShopShellComponent {
  menuItems: SidebarMenuItem[] = GLOBAL_MENU_ITEMS;
}
