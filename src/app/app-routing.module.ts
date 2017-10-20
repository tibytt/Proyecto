import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealhomeComponent} from "./realhome/realhome.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [{path: '', component:RealhomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
