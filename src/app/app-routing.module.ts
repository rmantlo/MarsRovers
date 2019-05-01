import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { SpiritComponent } from './spirit/spirit.component';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'opportunity', component: OpportunityComponent },
  { path: 'spirit', component: SpiritComponent },
  { path: 'curiosity', component: CuriosityComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
