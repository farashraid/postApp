import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { ClothesSelectComponent } from './clothes-select/clothes-select.component';
import { BackgroundSelectComponent } from './background-select/background-select.component';
import { GenderSelectComponent } from './gender-select/gender-select.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { BgSelectInputComponent } from './bg-select-input/bg-select-input.component';

const appRoutes: Routes = [
  { path: 'home/:id', component:  GenderSelectComponent},
  { path: 'clothes', component:  ClothesSelectComponent},
  { path: 'bgSelect', component:  BackgroundSelectComponent},
  { path: '**', component: GenderSelectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SelectInputComponent,
    ClothesSelectComponent,
    BackgroundSelectComponent,
    GenderSelectComponent,
    BgSelectInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
