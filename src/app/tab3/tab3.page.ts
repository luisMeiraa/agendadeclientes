import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public user:any;

  constructor(private storage: Storage, public router:Router, public userService:UserService) {

    this.user = this.userService._currentUser;
    console.log(this.userService._currentUser);
  }


  logOut(){
    console.log("asd");
    this.storage.remove("user_storage").then(() => {
      
      this.router.navigate(['/login']);
    });
  }
}
