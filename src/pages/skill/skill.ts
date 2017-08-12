import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the SkillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {


  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('doughnutCanvas2') doughnutCanvas2;

  doughnutChart: any;
  doughnutChart2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SkillPage');

    /**
     * chart
     */
    Chart.defaults.global.defaultFontColor = 'white';
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'horizontalBar',
      data: {
        labels: ["Javascript", "TypeScript", "HTML/CSS", "Python"],
        datasets: [{
          label: '# of Votes',
          data: [70, 75, 80, 50],
          backgroundColor: [
            'rgba(231, 243, 119, 1)',
            'rgba(119, 218, 243, 1)',
            'rgba(243, 162, 119, 1)',
            'rgba(119, 164, 243, 1)'
          ],
          hoverBackgroundColor: [
            "#ffff1a",
            "#1a75ff",
            "#ff751a",
            "#1a1aff"
          ]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100
            }
          }]
        },
        legend: { display: false },
        title: {
          display: true,
          text: 'Programming Language (On Percentage)'
        }
      }

    });

    this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {

      type: 'horizontalBar',
      data: {
        labels: ["Ionic", "Angular", "Yii", "Django"],
        datasets: [{
          label: '# of Votes',
          data: [80, 75, 65, 50],
          backgroundColor: [
            'rgba(124, 194, 244, 1)',
            'rgba(244, 124, 124, 1)',
            'rgba(244, 206, 124, 1)',
            'rgba(124, 244, 134, 1)'
          ],
          hoverBackgroundColor: [
            "#1a8cff",
            "#ff3300",
            "#ff9933",
            "#33cc33"
          ]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100
            }
          }]
        },
        legend: { display: false },
        title: {
          display: true,
          text: 'Framework (On Percentage)'
        }
      }

    });
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
