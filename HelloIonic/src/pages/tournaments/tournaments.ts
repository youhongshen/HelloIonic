import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TeamsPage} from "../teams/teams";

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

  itemTapped() {
    this.navCtrl.push(TeamsPage);
  }
}
