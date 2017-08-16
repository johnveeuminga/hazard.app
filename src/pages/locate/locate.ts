import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


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
  constructor(public loc: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LocatePage');
    this.loadMap();


  }

   loadMap(){
 
 
    

    this.loc.getCurrentPosition({
      enableHighAccuracy: true
    }).then((pos)  =>  {
      let latLng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    

      let selfMarker = new google.maps.Marker({
        map: this.map,
        position: latLng,
        icon: "http://www.google.com/mapfiles/dd-start.png"
      })

      let selfLocWindow = new google.maps.InfoWindow({
        content: "You are here"
      })

      selfLocWindow.open(this.map, selfMarker)

      var places = new google.maps.places.PlacesService(this.map)

      places.nearbySearch({
        location: latLng,
        radius: 500,
        types:['school', 'pharmacy', 'university', 'city_hall']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.addMarker(results[i]);
          }
        }
      })
    }).catch((err)=>{
      console.log(err);
    })
 
 
  }

  addMarker(pos){
    let marker = new google.maps.Marker({
      map: this.map,
      position: pos.geometry.location,
    })
    this.addInfoWindow(marker, pos.name);
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: '<span class="font-weight-bold">' + content + '</span>'
    })

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker)
    })
  }
}




