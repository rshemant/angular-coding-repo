import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './views/pet-list/pet-list.component';
import { PetInfoComponent } from './views/pet-info/pet-info.component';
import { InfoPageComponent } from './views/info-page/info-page.component';
import { PetPageComponent } from './views/pet-page/pet-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetInfoComponent,
    InfoPageComponent,
    PetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
