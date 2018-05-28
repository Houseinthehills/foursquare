import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { ImageLocationComponent } from './image-location/image-location.component';
import { SpecificLocationComponent } from './specific-location/specific-location.component';

const routes: Routes = [
  {
    path:"",
    component: LocationComponent
  },
  {
    path: "location-image",
    component: ImageLocationComponent
  },
  {
    path: "specific-location",
    component: SpecificLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
