import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {RedirectGuard} from './redirect.guard';

const routes: Routes = [
  { path: 'reviews', component: ReviewsComponent },
  { path: '', component: MainPageComponent},
  {
     path: 'assets/Light_Attention_Predicts_Protein_Location_from_the_Language_of_Life.pdf',
     canActivate: [RedirectGuard],
     component: RedirectGuard,
     data: {
       externalUrl: 'https://www.biorxiv.org/content/10.1101/2021.04.25.441334v1'
     }
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
