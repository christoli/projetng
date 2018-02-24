import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { FavouriteInfoComponent } from './components/favourite-info/favourite-info.component';
import { CandidateInfoService } from './services/candidate-info.service';


@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    FavouriteInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CandidateInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
