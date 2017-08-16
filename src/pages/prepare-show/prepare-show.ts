import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrepareShowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-prepare-show',
  templateUrl: 'prepare-show.html',
})
export class PrepareShowPage {

  module: number;
  content: any;
  title: any;

  earthquake = {
    before: ["Trust your senses. Assume that the first shaking you feel is an earthquake.", 
      "Move to away from hazardous objects Move away from windows, glass and exterior walls and unstable and heavy objects.",
      "Extinguish any and all flames.",
      "If you are near an exit door, open it a little so that if it becomes misshapen it will not be stuck closed.",
      "Remain calm. Stay calm by counting or taking slow, deep breaths. Look around to assess the situation before moving."],
    during: [" 'Drop, cover and hold on' Drop down on your knees and make yourself small. Cover your head and neck, and protect your face. Hold on to this cover, or move with it, until the shaking stops. Do not attempt to run. Pulling in your hands, arms, feet and legs makes you a smaller target and places you in position, ready to crawl to a safer location if necessary.",
          , "If you are near a sturdy table, get under it. Hold on to the table leg with one hand and protect your eyes with the other hand.",
          "If you are in bed, stay there and protect your head with a pillow.",
          "Stay indoors until the shaking stops and you are sure it is safe to exit.",
          "Find a clear spot away from overhead hazards Overhead hazards include buildings, trees, streetlights, power lines, overpasses, underpasses or above-ground gas lines.",
          "Stay outside and remain in open areas away from hazards."
        ],
    after: ["Be alert for earthquake-induced landslides and avalanches, which can dam streams or rivers or cause outbursts from glacial lakes. Even weeks after an earthquake, breakage of dams can put downstream areas in danger of flooding.",
            "Watch and listen for falling rocks and other debris, unusual sounds, such as cracking trees, sudden increase or decrease of water in streams, local dams, dykes, or levees that may be prone to damage or destruction.'",
            "Tune into your early warning system.",
            "If there is a landslide or flood warning, leave if it is safe to do so. If a warning includes evacuation, evacuate immediately. Watch for flooding and be alert when driving near embankments or along swollen waterways."]
  }

  typhoon = {
    before: ["Store ready-to-eat food and clean potable water enough for all family members for at least three (3) days.",
            "Make sure that you have emergency battery operated lights and a transistor radio ready and handy.",
            "Monitor TV and radio stations including social media sites for weather updates.",
            "Check the structure of your house and retrofit or repair as necessary to withstand the strong winds.",
            "Herd domesticated animals to safe grounds. If you have agricultural crops that can already be harvested, harvest them before the typhoon arrives.",
            "Check on family members.",
            "Cancel unnecessary trips",
            "If you live in an area that is prone to floods or landslides such as areas near the riverbanks or the sea or mountainous areas, you must have your lifeline kit ready for grab should an evacuation be required.",
            "Know the local emergency numbers and key contact persons."],
    during : ["Monitor news and weather forecast on the radio and TV to get the latest information.",
              "Stay indoors all the time unless you are told to evacuate to the nearest evacuation center.",
              "Ensure that candles or lanterns are kept away from flammable objects or materials when using them.",
              "Never walk in or expose yourself unnecessarily to flood waters.",
              "If you need to evacuate, be calm and move in an orderly and safe manner. - Close all windows and doors before leaving your house. - If you have time, make sure that appliances or equipment are moved to higher parts of the house. - Avoid roads or routes that are near the river. - Never cross rivers or streams at the height of the typhoon.",
              "Eye of the storm- be aware that the 'eye of the storm' is deceptively calm and quiet. The storm is not over. If things seem calm, it is probably the lull at the center of the storm, so maintain your secure position and do not go outside as the winds will get stronger again."
            ],
    after: ["Return home only when local authorities have declared that your area is safe",
            "Stay away from power lines and electrical wires. - Immediately report downed power lines to the power company. - If power lines are down outside your home, do not step on puddles or stand on water.",
            "Before entering your homes, look for loose power lines and other damage.",
            "Look out for wild animals especially snakes.",
            "Throw away or empty containers that have I accumulated water as this is a breeding ground for mosquitoes."
    ]
  }

  fire = {
    before: ["Eliminate fire hazards through good housekeeping.",
            "Oil or gas lamps and candles should be placed away from curtains or flammable materials. Do not place them near windows, fans or where children or pets may fall over them.",
            "PUT OUT THE FLAME before going to bed.",
            "NEVER leave a lighted cigarette/cigar/pipe unattended.",
            "Do not keep FLAMMABLE materials like gasoline, kerosene, alcohol and paint inside the house.",
            "Regularly CHECK your electrical installations and have all threadbare wirings and electrical equipment changed or repaired by a licensed electrician.",
    ],
    during: ["If you see smoke or fire, immediately find the nearest fire exit nearest you.",
            "Before the fire gets out of control, if you have close access to a fire extinguisher or a bucket full of sand, use it to put out the fire.",
            "Cover with a very wet blanket / cloth or throw a bucketful of sand to put out fire caused by faulty electrical wiring, gasoline or petrol, never douse with water.",
            "If you must exit through smoke, crawl to your nearest exit.",
            "If the cause or source of fire is electrical in nature, immediately turn off the main power switch.",
            "If a door is warm DO NOT open it. A back draft might occur. Find another fire exit nearest you.",
            "Call the fire department immediately as soon as you are in a safe place/area.",
            "If smoke, heat, or flames block your exit routes, STAY IN THE ROOM with the door closed. Signal for help using a bright colored cloth. Call the fire department and tell them where you are."
    ],
    after: ["Immediately go to the nearest clinic or hospital if you have burn injuries or have inhaled smoke.",
            "Even if the building or house did not totally burn down, never enter the premises until you are sure that the structure is still sound and it is safe from falling debris."
  
    ]
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.module = this.navParams.get("module");
    this.getPageDetails(this.module)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrepareShowPage');
  }

  getPageDetails(module){
    switch(module){
      case 2:
        this.title = "Fire"
        this.content = this.fire
        break
      case 3:
        this.title = "Typhoons"
        this.content = this.typhoon
        break
      case 4:
        this.title = "Earthquake"
        this.content = this.earthquake
        break
    }
  }

}
