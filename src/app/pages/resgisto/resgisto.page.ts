import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-resgisto',
  templateUrl: './resgisto.page.html',
  styleUrls: ['./resgisto.page.scss'],
})
export class ResgistoPage implements OnInit {
  @ViewChild('strEmail', null) strEmail: any;
  @ViewChild('strName', null) strName: any;
  @ViewChild('strPassword', null) strPassword: any;
  @ViewChild('confPass', null) confPass: any;
  ;

  constructor(public webservice:ApiService,
   public user:UserService,
   private storage: Storage,
   public router:Router) { }

  ngOnInit() {
  }



  registarUser(){
    if(this.strEmail.value == '' || this.strName.value == '' || this.strPassword.value == '' || this.confPass.value == ''){
      alert("Preencha todos os campos.");
      return;
    }
     if(this.strPassword.value != this.confPass.value){
      alert("Verifique a palavra-passe");
      return;
    }

    this.webservice.register(this.strEmail.value, this.strName.value,this.strPassword.value).then(data=>{
    let resp:any = data;

      if(resp.status == true){
        this.storage.set('user_storage', resp.user).then((response) => {
          if(response){
            this.router.navigate(['/tabs/tab1']);

          }
        });
      }
    });
  }
}
