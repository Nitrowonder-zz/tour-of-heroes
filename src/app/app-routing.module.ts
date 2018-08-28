import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [ { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                         { path: 'dashboard', component: DashboardComponent },
                         { path: 'heroes', component: HeroesComponent, },
                        //  The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
                         { path: 'detail/:id', component: HeroDetailComponent } ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule {

 }
