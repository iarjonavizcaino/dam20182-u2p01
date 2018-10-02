import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user:string;
  private password:string;

  private credentials:Object = {
    user:'',
    password:''
  };

  constructor(public navCtrl: NavController) {
    //this.credentials.user="Israel";
    //this.credentials.password ="12345";
  }

  goToOtherPage(): void {
    console.log('Ir hacia otra página');
    //this.navCtrl.push(OtherPage);
    console.log(this.credentials.user);
    console.log(this.credentials.password);
    //alert(this.credentials.user+";"+this.credentials.password);
    if(this.credentials.user==='admin'&&
      this.credentials.password==='admin'
    )
      alert("válido");
    else
      alert("inválido")
  }

  ionViewDidLoad() {
    console.log('Enter on Page');
  }

}
