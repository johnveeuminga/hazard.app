import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrepareShowPage } from '../prepare-show/prepare-show'

/**
 * Generated class for the PreparePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-prepare',
  templateUrl: 'prepare.html',
})
export class PreparePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreparePage');
  }

  goToPreparePage(module){
    this.navCtrl.push(PrepareShowPage, {module: module})
  }

}
