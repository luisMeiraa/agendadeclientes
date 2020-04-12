import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storage: Storage, public router:Router) {}


  logOut(){
    this.storage.remove("user_storage").then(() => {
      
      this.router.navigate(['login']);
    });
  }
}
