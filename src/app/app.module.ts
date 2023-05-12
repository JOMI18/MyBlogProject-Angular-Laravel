import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './GeneralUserComponents/homepage/homepage.component';
import { NavbarComponent } from './GeneralUserComponents/navbar/navbar.component';
import { FooterComponent } from './GeneralUserComponents/footer/footer.component';
import { DefaultStoriesComponent } from './GeneralUserComponents/default-stories/default-stories.component';
import { SignupPageComponent } from './GeneralUserComponents/signup-page/signup-page.component';
import { SigninPageComponent } from './GeneralUserComponents/signin-page/signin-page.component';
import { AdminpageComponent } from './Admin/adminpage/adminpage.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AdminMyStoryComponent } from './Admin/admin-my-story/admin-my-story.component';
import { AdminMoviesComponent } from './Admin/admin-movies/admin-movies.component';
import { AdminMusicComponent } from './Admin/admin-music/admin-music.component';
import { AdminAestheticsComponent } from './Admin/admin-aesthetics/admin-aesthetics.component';
import { DashboardComponent } from './Defaults/dashboard/dashboard.component';
import { PageNotFoundComponent } from './GeneralUserComponents/page-not-found/page-not-found.component';
import { UstoryComponent } from './Defaults/ustory/ustory.component';
import { UmoviesComponent } from './Defaults/umovies/umovies.component';
import { UnovelsComponent } from './Defaults/unovels/unovels.component';
import { UaestheticsComponent } from './Defaults/uaesthetics/uaesthetics.component';
import { UmusicComponent } from './Defaults/umusic/umusic.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AdminNovelsComponent } from './Admin/admin-novels/admin-novels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    DefaultStoriesComponent,
    SignupPageComponent,
    SigninPageComponent,
    AdminpageComponent,
    AdminNavComponent,
    AdminMyStoryComponent,
    AdminNovelsComponent,
    AdminMoviesComponent,
    AdminMusicComponent,
    AdminAestheticsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    UstoryComponent,
    UmoviesComponent,
    UnovelsComponent,
    UaestheticsComponent,
    UmusicComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  // reactiveformsmodule- used to control form state and determine when to display messages when handling input validation.
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
