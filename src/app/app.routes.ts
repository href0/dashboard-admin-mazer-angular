import { Routes } from '@angular/router';
import { ProductComponent } from './features/product/product.component';
import { MainComponent } from './shared/layout/main/main.component';
import { TestComponent } from './features/test/test.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';

export const routes: Routes = [
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'product', component: ProductComponent },
      { path: 'test', component: TestComponent },
    ],
  },
];
