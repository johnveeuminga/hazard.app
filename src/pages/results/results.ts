import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IonicStorageModule, Storage} from '@ionic/storage'
import { HomePage } from '../home/home';

/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  module = 0;
  score = 0.0;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.module = this.navParams.get("module")
    this.score = this.navParams.get("score")
    console.log(this.score);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
