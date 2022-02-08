import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MainPageComponent} from './main-page/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatListModule} from '@angular/material/list';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {ReviewsComponent} from './reviews/reviews.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {LAImageComponent} from './laimage/laimage.component';
import {ReadingGroupComponent} from './reading-group/reading-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NerfImageComponent} from './nerfimage/nerfimage.component';
import {PreTrainImageComponent} from "./3Dpretrainimage/3dpretrainimage.component";
import {LAArchImageComponent} from "./laarchimage/laarchimage.component";
import {MultiConfImageComponent} from "./multiconfimage/multiconfimage.component";
import {BYOLImageComponent} from "./byolimage/byolimage.component";
import {EquiBindImageComponent} from "./equibindimage/equibindimage.component";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ReviewsComponent,
    FooterComponent,
    LAImageComponent,
    NerfImageComponent,
    ReadingGroupComponent,
    PreTrainImageComponent,
    LAArchImageComponent,
    MultiConfImageComponent,
    BYOLImageComponent,
    EquiBindImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    FontAwesomeModule,
    MatListModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
