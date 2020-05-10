import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    public userservice:UserService
    ) {
    this.storage.get('user_storage').then(res => {
      if (res) {
        
        this.userservice._currentUser = res;
       
         this.router.navigate(['/tabs/tab1']);

    
      }else{
   
        this.router.navigate(['/login']);
      }
    }); 
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
  /*     this.router.navigate(['login']); */
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
