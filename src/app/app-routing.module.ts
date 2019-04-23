import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetPageComponent } from './views/pet-page/pet-page.component';

const routes: Routes = [
  { path: '', component: PetPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
