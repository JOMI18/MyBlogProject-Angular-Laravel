import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAestheticsComponent } from './Admin/admin-aesthetics/admin-aesthetics.component';
import { AdminMoviesComponent } from './Admin/admin-movies/admin-movies.component';
import { AdminMusicComponent } from './Admin/admin-music/admin-music.component';
import { AdminMyStoryComponent } from './Admin/admin-my-story/admin-my-story.component';
import { AdminNovelsComponent } from './Admin/admin-novels/admin-novels.component';
import { AdminpageComponent } from './Admin/adminpage/adminpage.component';
import { UsersDGuard } from './Authentications/users-d.guard';
import { DashboardComponent } from './Defaults/dashboard/dashboard.component';
import { UaestheticsComponent } from './Defaults/uaesthetics/uaesthetics.component';
import { UmoviesComponent } from './Defaults/umovies/umovies.component';
import { UmusicComponent } from './Defaults/umusic/umusic.component';
import { UnovelsComponent } from './Defaults/unovels/unovels.component';
import { UstoryComponent } from './Defaults/ustory/ustory.component';
import { HomepageComponent } from './GeneralUserComponents/homepage/homepage.component';
import { PageNotFoundComponent } from './GeneralUserComponents/page-not-found/page-not-found.component';
import { SigninPageComponent } from './GeneralUserComponents/signin-page/signin-page.component';
import { SignupPageComponent } from './GeneralUserComponents/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'signin', component: SigninPageComponent },
  { path: 'Ustory', component: UstoryComponent },
  { path: 'Umovies', component: UmoviesComponent },
  { path: 'Uaesthetics', component: UaestheticsComponent },
  { path: 'Unovels', component: UnovelsComponent },
  { path: 'Umusic', component: UmusicComponent },

  {
    path: 'usersD',
    component: DashboardComponent,
    // children: [],
    canActivate: [UsersDGuard],
    // data: {
    //       role: 'ROLE_USER'
    //  }
  },
  {
    path: 'admin',
    component: AdminpageComponent,
    children: [
      { path: 'Adstory', component: AdminMyStoryComponent },
      { path: 'Admusic', component: AdminMusicComponent },
      { path: 'Admovies', component: AdminMoviesComponent },
      { path: 'Adnovels', component: AdminNovelsComponent },
      { path: 'Adaesthetics', component: AdminAestheticsComponent },
    ],
    canActivate: [UsersDGuard],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
