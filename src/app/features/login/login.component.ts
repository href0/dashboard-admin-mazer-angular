import { CommonModule } from '@angular/common';
import { Component, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers : [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  loginForm : FormGroup
  private loginSubscription? : Subscription;
  error : string = ''

  constructor(
    private _fb : FormBuilder,
    private loginService : LoginService,
    private router : Router

  ) {
    this.loginForm = this._fb.group({
      email : ['',  [Validators.required, Validators.email]],
      password : ['', Validators.required],
    })

  }

  onSubmit() {
    if(this.loginForm.invalid) return
    
    this.loginSubscription = this.loginService.create(this.loginForm.value).subscribe(result => {
      console.log('result', result)
      this.router.navigate(['product'])
    }, ({error}) => {
      console.log('error ', error)
      this.error = error.message
    })

  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe()
  }

  
}
