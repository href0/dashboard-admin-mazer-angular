import { Component } from '@angular/core';
import { PageTitleService } from '../../../core/services/page-title.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  pageTitle = 'Create User'
  breadCrumb = ['User', 'Create']


  constructor(
    private shareTitle: PageTitleService,
  ) {}

  ngOnInit(): void {
    this.sendDataToSidebar()
  }

  sendDataToSidebar(): void {
    this.shareTitle.setSharedTitle(this.pageTitle, this.breadCrumb);
  }

  addUser() {
    
  }
}
