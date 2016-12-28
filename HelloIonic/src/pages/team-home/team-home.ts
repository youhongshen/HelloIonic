import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TeamDetailPage} from "../team-detail/team-detail";
import {StandingsPage} from "../standings/standings";

/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = navParams.data;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TeamHomePage');
  // }

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  team: any;
}
