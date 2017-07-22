import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocatePage } from '../locate/locate';
import { AssessPage } from '../assess/assess';
import { ContactPage } from '../contact/contact';
import { PreparePage } from '../prepare/prepare';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPreparePage(){
  	this.navCtrl.push(PreparePage);
  }

  openLocatePage(){
  	this.navCtrl.push(LocatePage);
  }


  openContactPage(){
  	this.navCtrl.push(ContactPage);
  }

  openAssessPage(){
  	this.navCtrl.push(AssessPage);
  }



}
