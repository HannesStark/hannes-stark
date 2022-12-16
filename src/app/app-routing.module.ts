import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSerializer} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {RedirectGuard} from './redirect.guard';
import {ReadingGroupComponent} from './reading-group/reading-group.component';
import {DefaultUrlSerializer, UrlTree} from '@angular/router';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    // Optional Step: Do some stuff with the url if needed.

    // If you lower it in the optional step
    // you don't need to use "toLowerCase"
    // when you pass it down to the next function
    return super.parse(url.toLowerCase());
  }
}

const routes: Routes = [
  {
    path: "logag-reading-group",
    canActivate: [RedirectGuard],
    component: ReadingGroupComponent,
    data: {
      externalUrl: "https://m2d2.io/talks/log2/about/"
    }
  },
  {path: 'reviews', component: ReviewsComponent},
  {path: '', component: MainPageComponent},
  {
    path: 'assets/Light_Attention_Predicts_Protein_Location_from_the_Language_of_Life.pdf',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'https://academic.oup.com/bioinformaticsadvances/advance-article/doi/10.1093/bioadv/vbab035/6432029'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
