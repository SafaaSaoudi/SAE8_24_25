import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'residences', component:ResidencesComponent},
  {path: 'rdetails/:id', component:ResidenceDetailsComponent},
  {path:"addResidence", component:AddResidenceComponent},
  
  {path:'apartments', component:ApartmentsComponent },
  {path:'addApartment', component:AddApartmentComponent},
  {path:"**", component:NotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
