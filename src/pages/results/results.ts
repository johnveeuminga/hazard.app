import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IonicStorageModule, Storage} from '@ionic/storage'
import { Http} from '@angular/http'
import { HomePage } from '../home/home'
import {Observable} from 'rxjs/Observable'

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
  module:any;
  score = 0.0;
  message:any;

  constructor(public http: Http, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.module = this.navParams.get("module")
    this.score = this.navParams.get("score")

    //get message
    this.getMess(this.module)
      .subscribe(data => {
        this.message = data;
        console.log(this.message)
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }

  private getMess(module): Observable<any>{
    let mess
    return this.http.get('assets/messages.json')
      .map(messages => {
         mess = messages.json()
         switch(module){
            case 1:
              return mess.earthquake
            case 2:
              return mess.fire
            case 4:
              return mess.typhoon
         }
      })

  }
}
