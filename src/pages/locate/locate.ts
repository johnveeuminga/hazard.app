import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DirectionsPage } from '../directions/directions';
import { SearchLocPage } from '../search-loc/search-loc';


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
	@ViewChild('fullScreen') container: ElementRef;
    map: any;
    selectedMarker = null;
    currentPos:any;
    infowindow: any;
    url:any;
    searchKey:string;
    markers = [];
    loading=false;
  constructor(public modalCtrl:ModalController, public actionSheet: ActionSheetController, public loc: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocatePage');
    this.loadMap();
  }

   loadMap(){
    this.loading = true;
    this.loc.getCurrentPosition({
      enableHighAccuracy: true
    }).then((pos)  =>  {
      this.currentPos = pos;
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
        types:['school', 'pharmacy', 'university', 'city_hall', 'hospital']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.addMarker(results[i]);
          }
        }
      })
    })
    this.loading = false;
 
  }

  addMarker(pos){
    let marker = new google.maps.Marker({
      map: this.map,
      position: pos.geometry.location,
    })
    this.markers.push(marker)
    this.addInfoWindow(marker, pos);
  }

  addInfoWindow(marker, content){
    
    let mapUrl = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyDj5mT5JJoBsRC07G22L3aIWdeaNVsSWpI';
    
    google.maps.event.addListener(marker, 'click', () => {
      if(this.infowindow){
        this.infowindow.close();
      }
      this.infowindow = new google.maps.InfoWindow({
        content: '<span class="font-weight-bold">' + content.name + '</span>'
      })
      this.infowindow.open(this.map, marker)
      this.setSelectedMarker(content);
      let el = this.container.nativeElement as HTMLElement
      el.click()
      console.log(this.currentPos)
      let origin = `&origin=${this.currentPos.coords.latitude},${this.currentPos.coords.longitude}`
      let destination = `&destination=place_id:${content.place_id}` 
      this.url = mapUrl + origin + destination
      console.log(this.url)
      console.log(this.selectedMarker)
    })
  }

  getSelectedMarker(){
    console.log(this.selectedMarker)
    return (this.selectedMarker)
  }

  setSelectedMarker(content){
    this.selectedMarker = content
  }

  presentActionSheet(){
    let actionSheet = this.actionSheet.create({
      title: 'Select mode of transportation',
      buttons: [
        {
          text: "Walking",
          icon: "walk",
          handler: () => {
            this.goToDirectionsPage(1)
          }
        },

        {
          text: "Driving",
          icon: "car",
          handler: () => {
            this.goToDirectionsPage(2)            
          }
        },
        
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
        }
      ]
    });

    actionSheet.present();
  }

  goToDirectionsPage(mode){
    let destination = this.selectedMarker
    this.navCtrl.push(DirectionsPage, {mode, destination})
  }

  search(){
    this.loading = true;
    if(this.searchKey == null || this.searchKey == ""){
      return false;
    }else{
      let query = this.searchKey.split(' ').join('+')
      let service = new google.maps.places.PlacesService(this.map);
      let request = {
        location: new google.maps.LatLng(this.currentPos.coords.latitude,this.currentPos.coords.longitude),
        radius: '500',
        query: query,
      }

      service.textSearch(request, (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          console.log(results)  
          for( let marker of this.markers){
            marker.setMap(null)
          }      
          for (var i = 0; i < results.length; i++) {
            for(let type of results[i].types){
              if(type == "school" || type=="barangay_hall" || type=="pharmacy" || type=="university"){
                this.markers = []
                this.addMarker(results[i]);
                break
              }
            }
          }
        }
      });
    }
    this.loading = false;
  }

  showModal(){
    let modal = this.modalCtrl.create(SearchLocPage);
    modal.present();
  }

}





