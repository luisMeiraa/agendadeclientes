import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  ApiService } from 'src/app/services/api.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-marcacao',
  templateUrl: './adicionar-marcacao.page.html',
  styleUrls: ['./adicionar-marcacao.page.scss'],
})
export class AdicionarMarcacaoPage implements OnInit {
  @ViewChild('txtObservacoes', null) txtObservacoes: any;
  @ViewChild('txtTratamento', null) txtTratamento: any;
  @ViewChild('txtData', null) txtData: any;
  @ViewChild('txtHora', null) txtHora: any;


cliente:any;
marcacao:any={};
user:any;

  constructor(
    public toastController: ToastController,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private webservice: ApiService,
    private userService: UserService,
    private nav:NavController) {
      
      this.user = this.userService._currentUser;
      console.log(this.user);
    if (this.router.getCurrentNavigation().extras.state) {
      this.cliente = this.router.getCurrentNavigation().extras.state.cliente;
  
    }
   }

  ngOnInit() {
  }

 
  addMarcacao(){
     this.txtData.value.substring(0,10);
    this.marcacao.strDateUTC = this.txtData.value.substring(0,10);;
  
    let ano = this.txtData.value.substring(0,4);
    let mes = this.txtData.value.substring(5,7);
    let dia = this.txtData.value.substring(8,10);
    this.txtData.value = dia+'/'+mes+'/'+ano;
    this.txtHora.value.substring(11,16);

    this.marcacao.id_client = this.cliente.id;
    this.marcacao.idUser = this.user.id
    this.marcacao.strClientName = this.cliente.strName;
    this.marcacao.strClientContact = this.cliente.strPhoneNumber;
    this.marcacao.strObs = this.txtObservacoes.value;
    this.marcacao.strService = this.txtTratamento.value;
    this.marcacao.strDate =  this.txtData.value;
    this.marcacao.strHour =   this.txtHora.value.substring(11,16);


    this.webservice.createAppointment(this.marcacao).then(data=>{
      let resp:any = data;

      this.webservice.presentToast(resp.message);
      if(resp.Status == true)
      {
        this.nav.pop();
       
      }
    });  

  }
 
}
