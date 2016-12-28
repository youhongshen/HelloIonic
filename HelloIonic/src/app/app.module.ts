import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {MyTeamsPage} from "../pages/my-teams/my-teams";
import {TournamentsPage} from "../pages/tournaments/tournaments";
import {TeamsPage} from "../pages/teams/teams";
import {TeamDetailPage} from "../pages/team-detail/team-detail";
import {TeamHomePage} from "../pages/team-home/team-home";
import {StandingsPage} from "../pages/standings/standings";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
