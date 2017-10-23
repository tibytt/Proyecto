import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealhomeComponent} from "./realhome/realhome.component";
import {HomeComponent} from "./home/home.component";
import { FormularioComponent } from './formulario/formulario.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [{path: 'home', component:RealhomeComponent}, {path: 'contacto' , component:FormularioComponent },
{path:"**", component: NotfoundComponent}, {path:"posts", component:PostsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
