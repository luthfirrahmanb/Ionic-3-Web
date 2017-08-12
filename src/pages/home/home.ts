import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MdButtonModule} from '@angular/material';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

  animations: [
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('1000ms ease-in-out')
      ])
    ]),
    trigger('flyInBottomSlow3', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('1800ms ease-in-out')
      ])
    ])
  ]
})
export class HomePage {

   welcomeToState: any = "in";
   myWebsiteTo: any = "in";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  toHome(){
    this.navCtrl.setRoot('HomePage');
  }
  toAbout(){
    this.navCtrl.setRoot('AboutPage');
  }

  toSkill(){
    this.navCtrl.setRoot('SkillPage');
  }

}
