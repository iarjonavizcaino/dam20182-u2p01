import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApiRest{
    //private http:any;
    public users:any;

    constructor(private http:Http) {
        
    }

    getUsers():void {
        this.http.get("http://127.0.0.1:8080/users.json")
        .subscribe(
            (res) => { //Todo Ok 
                this.users = res.json();
                console.log(this.users);
            },
            function(err) { //Error
                console.log(err);
            }
        );
    }    
}