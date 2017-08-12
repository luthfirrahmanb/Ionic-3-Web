import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',


  animations: [

    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('5000ms ease-in-out')
      ])
    ]),

    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0)' }),
        animate('900ms ease-in-out')
      ])
    ])
  ]
})
export class AboutPage {

  /**
   * Story Section
   */
  section1State: any = "in";
  section2State: any = "in";
  aboutMe: any;

  /**
   * School Section
   */
  school: any = [];

  /**
   *  Work Exp Section
   */
  work: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.aboutMe = "stories";

    this.school = [{ name: 'Mercu Buana University', year: '2015-Now', place: 'West Jakarta', photo: '../../assets/images/mercu.png' },
    { name: 'Telkom Jakarta Vocational School', year: '2012-2015', place: 'West Jakarta', photo: '../../assets/images/telkom2.png' },
    { name: 'Al-Hasanah Islamic Junior High School', year: '2009-2012', place: 'Tangerang', photo: '../../assets/images/alhasanah.jpg' },
    { name: 'Al-Mubarak Islamic Primary School', year: '2003-2009', place: 'South Tangerang', photo: '../../assets/images/almubarak.jpg' }];

    this.work = [{
      id: 1, responsibility: 'Create Internal System with Ionic 3, MariaDB and Fireloop, Normalization Internal Database, migration from MSSQL to MariaDB, and Create Web Admin for input Bank Loan and Insurance Data with Ionic 3 and Loopback',
      name: 'PT Indodev Niaga Internet', year: 'Apr 2017 - Now', as: 'Mobile App Developer', photo: 'assets/images/dataon.png', portofolio: 'Internal System (Ionic 3, Socket.IO, Moment.Js, Loopback)'
    },
    {
      id: 2, responsibility: "Customize client's HR System By their order, Support Client on site or on the phone, and give them Training about our HR Systems",
      name: 'PT Indodev Niaga Internet', year: 'Nov 2016 -  Apr 2017', as: 'Software Maintenance Staff Jr', photo: 'assets/images/dataon.png', portofolio: 'none'
    },
    {
      id: 3, responsibility: "Assisting My supervisor to create an UI for T-Bike Porject, and create School's system with YII 1 and MySQL",
      name: 'PT Surya Genta Perkasa', year: 'Feb 2016 - Oct 2016', as: 'Web Programmer', photo: 'assets/images/sgp.png', portofolio: 'none'
    },
    {
      id: 4, responsibility: "Monitoring Vsat and optic Network and support client on the phone, activate or deactivate Client's Internet Service",
      name: 'PT Infracom Telesarana', year: 'Nov 2015 - Feb 2016', as: 'NOC', photo: 'assets/images/infracom.jpg', portofolio: 'none'
    }];
  }

  ionViewDidLoad() {
  }

  selWorkExperience(w) {
    this.navCtrl.push('WorkDetailPage', { item: w });
    // console.log(this.work, "work exp dari list")
  }

  toHome() {
    this.navCtrl.setRoot('HomePage');
  }
  toAbout() {
    this.navCtrl.setRoot('AboutPage');
  }

  toSkill() {
    this.navCtrl.setRoot('SkillPage');
  }

}
