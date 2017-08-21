import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { DecimalPipe } from '@angular/common'
import { ResultsPage } from '../pages/results/results';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { CallNumber } from '@ionic-native/call-number'


// import { 
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   LatLng,
//   Marker
// } from '@ionic-native/google-maps';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LocatePage } from '../pages/locate/locate';
import { AssessPage } from '../pages/assess/assess';
import { ContactPage } from '../pages/contact/contact';
import { PreparePage } from '../pages/prepare/prepare';
import { QuizzesPage } from '../pages/quizzes/quizzes';
import { PrepareShowPage } from '../pages/prepare-show/prepare-show'
import { DirectionsPage } from '../pages/directions/directions'
import { SearchLocPage } from '../pages/search-loc/search-loc'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuizProvider } from '../providers/quiz/quiz';
import { QuizComponent } from '../components/quiz/quiz';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LocatePage,
    AssessPage,
    ContactPage,
    PreparePage,
    QuizComponent,
    QuizzesPage,
    ResultsPage,
    PrepareShowPage,
    DirectionsPage,
    SearchLocPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LocatePage,
    AssessPage,
    ContactPage,
    PreparePage,
    QuizzesPage,
    ResultsPage,
    PrepareShowPage,
    DirectionsPage,
    SearchLocPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuizProvider,
    DecimalPipe,
    Geolocation,
    // {provide: Geolocation, useClass:  Geolocationmock}   
    GoogleMaps,
    CallNumber,
    // GoogleMap,
    // Marker,
  ]
})
export class AppModule {}
