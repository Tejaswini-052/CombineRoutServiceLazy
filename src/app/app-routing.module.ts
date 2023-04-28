import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './PetAdoption/home-component/home-component.component';
import { ContactComponentComponent } from './PetAdoption/contact-component/contact-component.component';

const routes: Routes = [
  {path:"home" ,component:HomeComponentComponent},
  {path:"contact" ,component:ContactComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
