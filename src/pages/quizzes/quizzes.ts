import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common'
import { NavController, NavParams } from 'ionic-angular';
import { QuizProvider } from '../../providers/quiz/quiz';
import { Storage } from '@ionic/storage';
import { ResultsPage } from '../results/results';

/**
 * Generated class for the QuizzesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quizzes',
  templateUrl: 'quizzes.html',
})
export class QuizzesPage {

  module: any
  questions: any
  answers:any 
  userAnswers = []
  total = 0
  rawScore = 0;
  percentScore = 0.0;
  constructor(private decPipe: DecimalPipe, private storage: Storage, private quiz: QuizProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.module = this.navParams.get("module")
    this.getQuiz(this.module)
    this.setTotal(this.answers)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzesPage');
  }

  public getQuiz(module){
    switch(this.module){
      case 1:{
        this.questions = this.quiz.earthquake
        this.answers = this.quiz.earthquakeAnswers
        break
      }
      case 2:
        this.questions = this.quiz.fire
        this.answers = this.quiz.fireAns
        break;
      case 3:
        this.questions = this.quiz.flood
        this.answers = this.quiz.floodAns
        break;
      case 4 : 
        this.questions = this.quiz.typhoon
        this.answers = this.quiz.typhoonAns
        break;
      }
  }

  setTotal(ans){
    var total = 0;
    ans.forEach(function (obj){
      console.log(obj);
      total += obj.answers.length
    })
    this.total = total;
  }

  checkboxChecked(index, value){
    if(this.userAnswers[index]){
      if(this.userAnswers[index].indexOf(value) == -1){
        this.userAnswers[index].push(value)        
      }else{
        var i = this.userAnswers[index].indexOf(value);
        this.userAnswers[index].splice(i, 1);
        console.log(parseInt(value));
      }
    }else{
      this.userAnswers[index] = [value]
    }
    console.log(this.userAnswers);
  }
  
  enableSubmit(){
    if(this.userAnswers.length == this.questions.length){
      for(var i = 0;i<this.userAnswers.length;i++){
        if(this.userAnswers[i]=== undefined){
          return false
        }
      }
      return true
    }
    return false
  }

  submit(){
    this.rawScore = 0;
    this.userAnswers.forEach( function (ans, i){
      if(Array.isArray(ans)){
        let maxScore = this.answers[i].answers.length;  
        let score = 0;      
        ans.forEach ( function (userAns){
          if(this.answers[i].answers.indexOf(parseInt(userAns))!= -1){
            score++
          }else{
            if(!(score == 0) ){
              score--
            }
          }
          console.log(score)
        }, this)
        this.rawScore = this.rawScore + score        
      }else{
        if(this.answers[i].answers.indexOf(parseInt(ans)) != -1){
          this.rawScore += 1;
        }else{
        }
      }
    }, this)

    this.percentScore = (this.rawScore/this.total)*100
    this.userAnswers = []
    this.setStorageScore(this.module, this.percentScore)
    this.navCtrl.push(ResultsPage, {module: this.module, score: this.percentScore})
  }

  setStorageScore(module, value){
    switch(this.module){
      case 1:{
        this.storage.set("eqScore", value);
        break
      }
      case 2:
        this.storage.set("fireScore", value);
        break;
      case 3:
       this.storage.set("floodScore", value)
        break;
      case 4 : 
        this.storage.set("tyScore", value);
        break;
      }
  }

}
