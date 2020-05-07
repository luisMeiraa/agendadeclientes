import { UserService } from './../../services/user.service';
import { PopoverComponent } from './../../popover/popover.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PopoverController, LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ficha-cliente',
  templateUrl: './ficha-cliente.page.html',
  styleUrls: ['./ficha-cliente.page.scss'],
})
export class FichaClientePage implements OnInit {
  
  @ViewChild('txtNome', null) txtNome: any;
  @ViewChild('txtTelemovel', null) txtTelemovel: any;
  @ViewChild('txtObservacoes', null) txtObservacoes: any;
  public cliente:any;
  public marcacoes:any;
  public currentUser:any;
  allData:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private popoverCtrl : PopoverController, 
    private webservice: ApiService,
    private loadingController: LoadingController,
    public user:UserService,
    public toastController: ToastController) {
    


    if (this.router.getCurrentNavigation().extras.state) {
      this.cliente = this.router.getCurrentNavigation().extras.state.cliente;
        console.log(this.cliente);
    
    }
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.webservice.presentLoading('Por favor aguarde...')
    this.currentUser = this.user._currentUser;
    this.webservice.getAppointmentsByUser(this.currentUser.id,this.cliente.id).then(data =>{
      let resp:any = data;

      this.marcacoes = resp.appointments;
      console.log(data);
      this.webservice.dissmissLoading();
    })
  }

  async menu(event: any){

    let popover = await this.popoverCtrl.create({
      component : PopoverComponent,
      event : event,
      componentProps:{
        cliente:  this.cliente
      }
    });

    return await popover.present();
}

      async updateContacto(){
        this.webservice.presentLoading('A editar o cliente.');

        this.cliente.strName = this.txtNome.value;
        this.cliente.strPhoneNumber = this.txtTelemovel.value;
        this.cliente.strObs = this.txtObservacoes.value;


          console.log(this.cliente);

        this.webservice.UpdateClient(this.cliente, this.currentUser).then(data=>{
          let resp:any = data;
          this.webservice.dissmissLoading()
          this.webservice.presentToast(resp.message);
          this.CancelEdit();
        }); 

      }



CancelEdit(){
  document.getElementById("showDataContact").style.display="block"
  document.getElementById("divEditContacto").style.display="none"
  document.getElementById("closeEdit").style.display="none"
  document.getElementById("btnSave").style.display="none"
}


adicionarMarcacao(){
  let navigationExtras: NavigationExtras = {
    state: {
        cliente: this.cliente,
        
    }
};
this.router.navigate(['adicionar-marcacao'], navigationExtras);
}



openSms() {
  window.open('sms:' + this.cliente.telemovel, '_system', 'location=yes');
}



}
