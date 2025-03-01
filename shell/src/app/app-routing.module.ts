import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

//const routes: Routes = [];

export const routes: Routes = [
  {path: "home" , component: HomeComponent  },
  {
    path: 'microApp1',
    loadChildren: () => import('../../../microApp1/src/app/app.module').then(m => m.AppModule)
  },
  {
    path: 'microApp2',
    loadChildren: () => import('../../../microApp2/src/app/app.module').then(m => m.AppModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
