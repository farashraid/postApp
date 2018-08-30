import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderSelectComponent } from './gender-select/gender-select.component';
import { ClothesSelectComponent } from './clothes-select/clothes-select.component'

const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full' },
  { path: '/home', component: ClothesSelectComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 
  
}
