import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

interface Menu {
  id      : number
  name    : string
  link    : string
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

export class SidebarComponent {
  isOpen = true

  sidebars : Array<Menu> = [
    {
      id : 1,
      name : "Admin",
      link : 'admin',
      icon : 'bi bi-stack',
      childs : [
        {
          id     : 1,
          name   : "User",
          link   : 'user',
          icon   : 'bi bi-stack',
          isOpen : false,
          childs : []
        }
      ]
    },
    {
      id : 2,
      name : 'Data',
      link : 'data',
      childs : [
        {
          id : 1,
          name : "Product",
          link : 'product',
          isOpen : false,
          icon : 'bi bi-stack',
          childs : [],
        },
      ]
    },
    {
      id : 3,
      name : "Me",
      link : 'me',
      childs : [
        {
          id : 1,
          name : "Profile",
          link : 'profile',
          icon : 'bi bi-stack',
          isOpen : false,
          childs : []
        },
        {
          id : 2,
          name : "Change Password",
          link : 'change-password',
          icon : 'bi bi-stack',
          isOpen : false,
          childs : []
        }
      ]
    }
  ]

  constructor(
    private authService : AuthService
  ){}

  toggleSubmenu(parentIndex : number, menuIndex : number) {
    console.log('togle')
    this.sidebars[parentIndex].childs[menuIndex].isOpen = !this.sidebars[parentIndex].childs[menuIndex].isOpen
  }

  onLogout() {
    this.authService.logout()
  }
}
