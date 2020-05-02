import { UserService } from './../../services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('strEmail', null) strEmail: any;
  @ViewChild('strPassword', null) strPassword: any;

  constructor(public webservice:ApiService,public storage: Storage,public router:Router, public user:UserService) { }

  ngOnInit() {
   /*  this.webservice.getClientesPHP().then(data=>{
      console.log(data); 
    }); */
  }


  /* post(){
    this.webservice.postAPI();
  } */

  login(){
    if(this.strEmail.value == '' || this.strPassword.value == '')
    {
      alert("Preencha todos os campos.");
      return;
    }


    this.webservice.loginLaravel(this.strEmail.value,this.strPassword.value).then(data=>{
      let resp:any = data;

       if(resp.Status == false){
         alert(resp.msg);  
       }
       if(resp.Status == true)
       {
        this.storage.set('user_storage', resp.user).then((response) => {
          if(response){
            this.user._currentUser = resp.user;
            this.router.navigate(['/tabs/tab1']);

          }
        });
       }
    });
  }
}
