import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
//import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: "home" , component: HomeComponent  } ,
  { path:  "" , redirectTo: "home" , pathMatch: "full" }
];

@NgModule({
  imports: [  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
