import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './views/pet-list/pet-list.component';
import { PetInfoComponent } from './views/pet-info/pet-info.component';
import { PetPageComponent } from './views/pet-page/pet-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetInfoComponent,
    PetPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
