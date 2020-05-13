import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalEditarPerfilPage } from '../pages/modal-editar-perfil/modal-editar-perfil.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public user:any;
  public month:any = 'Este mês';
  public totalAppointments:number = 0;
  public appointments:any;
  public compareDate:any;
  constructor(
    private storage: Storage, 
    public router:Router, 
    public userService:UserService,
    public webservice:ApiService,
    public modalController: ModalController
    ) {

    this.user = this.userService._currentUser;
    console.log(this.userService._currentUser);
  }


  logOut(){
  
    this.storage.remove("user_storage").then(() => { 
      this.router.navigate(['/login']);
    });
  }



  ionViewWillEnter(){
 

  }
  async editarPerfil() {
    const modal = await this.modalController.create({
      component: ModalEditarPerfilPage,
      componentProps:  {
        'user':this.user
      } 
    });
    return await modal.present();
  }

 
}
