import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

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
  constructor(public modalController: ModalController, private navParams:NavParams) { }

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

  }
}
