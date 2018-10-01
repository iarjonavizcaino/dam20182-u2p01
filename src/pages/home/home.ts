import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToOtherPage(): void {
    console.log('Ir hacia otra página');
    this.navCtrl.push(OtherPage);
  }

  ionViewDidLoad() {
    console.log('Enter on Page');
  }

}
