import { Component } from '@angular/core';
import { PageTitleService } from '../../core/services/page-title.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { finalize } from 'rxjs';
// import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  pageTitle = 'User'
  breadCrumb = ['User']
  users : Array<any> = []
  isLoading : boolean = false

  constructor(
    private shareTitle: PageTitleService,
    // private userService : UserService
    private uService : UserService
  ) {
   
  }

  ngOnInit(): void {
    this.isLoading = true
    this.uService.findAll()
      .pipe(finalize(() =>{
        this.isLoading = false
      }))
      .subscribe({
        next : (result) => {
          this.users = result.data
          console.log('users', this.users)
        }, error : (error) =>{
          console.log('errr', error)
          alert(error.join(""))
        }
    })
    this.sendDataToSidebar()
    
  }

  sendDataToSidebar(): void {
    this.shareTitle.setSharedTitle(this.pageTitle, this.breadCrumb);
  }


}
