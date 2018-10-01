import { Component } from "@angular/core";
import { NavController} from "ionic-angular";

@Component({
    selector:'other-page',
    templateUrl:'otherPage.html'
})
export class OtherPage {
    constructor(public navCtrl: NavController) {}
    
    goBack():void {
        this.navCtrl.pop();
    }

    onPageWillEnter() {
        console.log('Enter on Page');
    }
}