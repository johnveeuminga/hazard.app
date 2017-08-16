import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuizzesPage } from '../quizzes/quizzes'
import { Storage } from '@ionic/storage'
/**
 * Generated class for the AssessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-assess',
  templateUrl: 'assess.html',
})
export class AssessPage {

  floodScore: any;
  fireScore: any;
  tyScore: any;
  eqScore: any;
  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('floodScore').then( val => {
      this.floodScore = val;
    })

    this.storage.get('fireScore').then( val => {
      this.fireScore = val;
      console.log(this.fireScore);
    })

    this.storage.get('tyScore').then( val => {
      this.tyScore = val;
      console.log(this.tyScore);
    })

    this.storage.get('eqScore').then( val => {
      this.eqScore = val;
      console.log(this.eqScore);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssessPage');
  }

  goToQuizzesPage(module){
    this.navCtrl.push(QuizzesPage, {module: module});
  }
}
