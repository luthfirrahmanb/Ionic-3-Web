import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-detail',
  templateUrl: 'work-detail.html',
})
export class WorkDetailPage {

   item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = this.navParams.get("item");
    // console.log(this.item);
  }

  ionViewDidLoad() {
  }

}
