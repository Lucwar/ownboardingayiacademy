import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuiensomosComponent } from './pages/quiensomos/quiensomos.component';
import { QuehacemosComponent } from './pages/quehacemos/quehacemos.component';
import { PorquehacemosComponent } from './pages/porquehacemos/porquehacemos.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'quienesomos', component: QuiensomosComponent},
  {path: 'quehacemos', component: QuehacemosComponent},
  {path: 'porquehacemos', component: PorquehacemosComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
