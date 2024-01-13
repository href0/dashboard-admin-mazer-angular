import { Routes } from '@angular/router';
import { ProductComponent } from './features/product/product.component';
import { MainComponent } from './shared/layout/main/main.component';
import { TestComponent } from './features/test/test.component';

export const routes: Routes = [
{
  path : '', component : MainComponent, 
  children : [ 
    { path : 'product', component : ProductComponent } ,
    { path : 'test', component : TestComponent } 
  ]
}
];
