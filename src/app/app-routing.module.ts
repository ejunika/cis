import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CisComponent } from './cis/cis.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { UtcComponent } from './utc/utc.component';
import { DfyComponent } from './dfy/dfy.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/cis', pathMatch: 'full' },
  { path: 'cis', component: CisComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/profile', component: ProfileComponent },
  { path: 'home/plan', component: PlanComponent },
  { path: 'home/utc', component: UtcComponent },
  { path: 'home/dfy', component: DfyComponent },
  { path: 'home/support', component: SupportComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
