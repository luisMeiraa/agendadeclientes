import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-editar-perfil',
  templateUrl: './modal-editar-perfil.page.html',
  styleUrls: ['./modal-editar-perfil.page.scss'],
})
export class ModalEditarPerfilPage implements OnInit {
  public user:any;
  @ViewChild('strEmail', null) strEmail: any;
  @ViewChild('strName', null) strName: any;
  @ViewChild('strPassword', null) strPassword: any;
  @ViewChild('confPass', null) confPass: any;
  constructor(public modalController: ModalController, private navParams:NavParams, private webservice: ApiService,public alertController: AlertController) { }

  ngOnInit() {
      this.user = this.navParams.get("user");
      this.strEmail.value=this.user.strEmail;
      this.strName.value=this.user.strName;
      console.log(this.user);
  }
  dismiss() {
    
    this.modalController.dismiss({
     
    });
  }
 async saveEditUser(){

    this.user.strEmail = this.strEmail.value;
    this.user.strName =  this.strName.value;
    

    if(  this.user.strName == ''){
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'O teu nome está incorreto.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if( this.strPassword.value !=  this.confPass.value) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'As passwords não coincidem.',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }

    if(!this.user.strEmail.includes("@" && ".")){
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'O teu email está incorreto.',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
   
    if(this.strPassword.value != ''){
      console.log("fa");
      this.user.strPassword =  this.strPassword.value;

    }


    this.webservice.updateUser(this.user).then(data=>{
      console.log(data);
    })
  }

  editPassword(){
      document.getElementById("editPassword").style.display="block"
  }
}
