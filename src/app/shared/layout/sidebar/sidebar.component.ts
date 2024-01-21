import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from '../../../core/services/menu.service';

interface Menu {
  id      : number
  name    : string
  url     : string
  icon?   : string
  isOpen? : Boolean
  childs? : any
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, HttpClientModule],
  providers : [AuthService],
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements OnInit {
  isOpen = true

  // sidebars : Array<Menu> = [
  //   {
  //     id : 1,
  //     name : "Admin",
  //     url : 'admin',
  //     icon : 'bi bi-stack',
  //     childs : [
  //       {
  //         id     : 1,
  //         name   : "User",
  //         url   : 'user',
  //         icon   : 'bi bi-stack',
  //         isOpen : false,
  //         childs : []
  //       }
  //     ]
  //   },
  //   {
  //     id : 2,
  //     name : 'Data',
  //     url : 'data',
  //     childs : [
  //       {
  //         id : 1,
  //         name : "Product",
  //         url : 'product',
  //         isOpen : false,
  //         icon : 'bi bi-stack',
  //         childs : [],
  //       },
  //     ]
  //   },
  //   {
  //     id : 3,
  //     name : "Me",
  //     url : 'me',
  //     childs : [
  //       {
  //         id : 1,
  //         name : "Profile",
  //         url : 'profile',
  //         icon : 'bi bi-stack',
  //         isOpen : false,
  //         childs : []
  //       },
  //       {
  //         id : 2,
  //         name : "Change Password",
  //         url : 'change-password',
  //         icon : 'bi bi-stack',
  //         isOpen : false,
  //         childs : []
  //       }
  //     ]
  //   }
  // ]
  sidebars! : Array<Menu>
  constructor(
    private authService : AuthService,
    private menuService : MenuService,
  ){
  }

  ngOnInit(): void {
    this.menuService.menu$.subscribe(menuData => {
      this.sidebars = menuData;
    });
    
  }

  toggleSubmenu(parentIndex : number, menuIndex : number) {
    console.log('togle')
    this.sidebars[parentIndex].childs[menuIndex].isOpen = !this.sidebars[parentIndex].childs[menuIndex].isOpen
  }

  onLogout() {
    this.authService.logout()
  }
}
