import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CallNumber } from '@ionic-native/call-number'


/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contacts: any;

  constructor(public call:CallNumber, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get('assets/contact-list.json')
      .map(contacts => contacts.json())
      .subscribe( data => {
        this.contacts = data
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  callNumber(number){
    this.call.callNumber(number, true)
      .then(() => {
        console.log("dialed")
      })
      .catch((err)=>{
        console.log(err)
      })
  }

}
