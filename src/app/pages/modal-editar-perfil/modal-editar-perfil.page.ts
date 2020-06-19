import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
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
  constructor(public modalController: ModalController, private navParams:NavParams, private webservice: ApiService,) { }

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
  saveEditUser(){
    this.user.strEmail = this.strEmail.value;
    this.user.strName =  this.strName.value;
    this.webservice.updateUser(this.user).then(data=>{
      console.log(data);
    })
  }

  editPassword(){
      document.getElementById("editPassword").style.display="block"
  }
}
