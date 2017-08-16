import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuizProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuizProvider {

  earthquake = [
    this.trueOrFalse('True or False: Summer is the most common time of the year for earthquakes.'),
    this.multipleChoice('What is the most common hazard to occur after an earthquake hits?'),
    this.trueOrFalse('An aftershock is a weaker earthquake that occurs after a previous stronger earthquake, in the same area of the main shock.'),
    this.multipleChoice('What should you do if you are indoors and you feel the shaking of an earthquake?'),
    this.multipleAns('If you are in a coastal area and there is an earthquake, when the shaking stops, you should: Tap all that apply.'),
  ]

  earthquakeAnswers = [
     {choices: ["True", "False"], answers: [1] },
     {choices: ["Fire", "Tornado", "Landslide", "Tsunami"], answers: [0]},
     {choices: ["True", "False"], answers:[0] },
     {choices : ["Stand under a doorway.", 
            "Watch the earthquake from a window ",
            "Move as little as possible and drop, cover and hold.",
            "Get in a tub with a dog"],
          answers: [2]},
      {choices: ["Stay where you are",
            "Only evacuate if you see a large wave forming",
            "Move quickly away form the higher ground.",
            "Assume that you are safe, especially if there is immediately no official tsuanmi warning",
            "Listen to the radio and local alerts for a tsunami warning or additional information.",
            "Be ready to evacuate.",
            "Immediately return to shore if on boat at sea.",
      ], answers: [2, 4, 5]}
  ]

  fire = [
    this.trueOrFalse("Once you are out, go back in to rescue others."),
    this.trueOrFalse("A fire escape plan needs to include at least one escape route for every room in the home and a convenient meeting place at a safe distance."),
    this.trueOrFalse("If you see smoke or fire in your first escape route, use your second way out. If you must exit through smoke, crawl low under the smoke to your exit. If you are escaping through a closed door, feel the door before opening it. If the door is warm, use your second way out."),
    this.trueOrFalse("If smoke, heat, flames block your exit routes, stay in the room with the door closed. Signal for help using a brightly colored cloth at the window. If there is a telephone in the room, call the fire department and tell them where you are. "),
  ]

  fireAns = [
    this.trueOrFalseAnsFalse(),
    this.trueOrFalseAnsTrue(),
    this.trueOrFalseAnsTrue(),
    this.trueOrFalseAnsTrue(),
  ]

  flood = [
    this.slider("What is the minimum amount of swiftly moving water than can sweep you off your feet? Drag slider below to select number."),
    this.multipleChoice("During a flood, you should:"),
    this.trueOrFalse("True or false: It is usually safe to outrun floodwater because the water almost always flows very slowly."),
    this.multipleAns("If you are in a vehicle during a flood, you should: Tap all that apply."),
    this.slider("What is the minimum amount of rushing water that can carry away most vehicles? Drag slider below to select a number.")
  ]
  floodAns = [
    this.sliderAns(15),
    {choices: [
      "Swim to a higher ground.",
      "Try to outrun the flood.",
      "Evacuate vertically, moving to higher ground or the uppermost floors of buildings.",
      "Drive through the floodwaters as fast as possible"
    ], answers: [2]},
    this.trueOrFalseAnsFalse(),
    {choices: [
      "Move to higher ground, away from rivers, streams, creeks and storm drains.",
      "Never attempt to cross any flowing water or water-covered roads or bridges.",
      "Drive around barricades if a route has been blocked. Finding a different route may take too long.",
      "Try restarting the engine if your vehicle stalls in water.",
      "Open the windows to escape if your vehicle is being submerged."
    ], answers: [0, 1, 4]},
    this.sliderAns(50),
  ]

  typhoon = [
   this.trueOrFalse("A Typhoon Watch is when typhoon conditions are a threat within 72 hours and a Typhoon Warning is when they are within 48 hours."),
   this.multipleAns("Select the actions that will help prepare you for an upcoming typhoon season? Tap all that apply."),
    this.multipleAns("When there is a typhoon watch, you should: Tap all that apply."),
   this.trueOrFalse( "The 'eye of the storm' is a region of calm weather found at the center of a typhoon."),
    this.multipleAns("If you are advised to evacuate, or if you think you are in danger: Tap to select."),
    this.multipleChoice("Which of the following should be used as window protection in the absence of storm shutters? ")

  ]

  typhoonAns = [
    this.trueOrFalseAnsFalse(),
    {
      choices: [
        "Obtain a battery-powered or hand crank radio.",
        "Buy a few umbrellas.",
        "Put together an emergency preparedness kit",
        "Make & practice a plan for your household"
      ], answers: [0, 2, 3]
    },
    {
      choices: [
        "Do nothing until a Typhoon Warning is issued.",
        "Bring indoors anything that can become a flying object.",
        "Open all the windows in your house.",
        "Check that your evacuation supplies and your 'go bags' are ready.",
        "Keep your pets and service animals outdoors.",
        "Go outside and watch the storm.",
      ], answers: [1, 3]
    },
    this.trueOrFalseAnsTrue(),
    {
      choices: [
        "Only evacuate if you live within 1 kilometer of the coast.",
        "Wait until you can see that the storm is severe.",
        "Evacuate immediately away from the storm's direction of movement.",
        "Evacuate immediately toward the storm's center, the eye', where it is most calm."
      ], answers: [3]
    },
    {
      choices: ["Gum", "Plywood", "Tape", "Towels"], answers: [1]
    }
  ]

  constructor(public http: Http) {
    console.log('Hello QuizProvider Provider');
  }

  public trueOrFalseAnsFalse(){
    return {choices: ["True", "False"], answers: [1]}
  }

  public trueOrFalseAnsTrue(){
    return {choices: ["True", "False"], answers: [0]}
  }

  public sliderAns(ans){
    return {choices: [], answers: [ans], type:"slider"}
  }

  public trueOrFalse(question){
    return {question: question, type:"trueorfalse"}
  }

  public multipleChoice(question){
    return {question: question, type:"multiplechoice"}
  }

  public multipleAns(question){
    return {question: question, type:"multipleans"}
  }

  public slider(question){
    return {question: question, type:"slider"}
  }


}
