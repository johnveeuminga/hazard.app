import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LocatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-locate',
  templateUrl: 'locate.html',
})



export class LocatePage {
	@ViewChild('map') mapElement: ElementRef;
	  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LocatePage');
    this.loadMap();


  }

   loadMap(){
 
    let latLng = new google.maps.LatLng(16.3994724,120.5537556);
 
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  }
}




