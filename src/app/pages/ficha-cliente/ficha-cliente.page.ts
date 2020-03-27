import { PopoverComponent } from './../../popover/popover.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PopoverController, LoadingController } from '@ionic/angular';
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
  allData:any
  constructor(private route: ActivatedRoute,private router: Router,private popoverCtrl : PopoverController, private webservice: ApiService,private loadingController: LoadingController) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.cliente = this.router.getCurrentNavigation().extras.state.cliente;
      
     console.log( this.cliente);
    }
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.webservice.Getmarcacoes().subscribe(res => {
      this.allData = res;
      this.marcacoes = this.allData.filter((marcacao) => {
        return marcacao.id_cliente == this.cliente.id;
    });
    console.log(this.marcacoes);
      });
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
  const loading = await this.loadingController.create({
    message: 'A editar o contacto..'
  });
  await loading.present();
  this.cliente.nome = this.txtNome.value;
  this.cliente.telemovel = this.txtTelemovel.value;
  this.cliente.clienteObs = this.txtObservacoes.value;
  this.webservice.updateCliente(this.cliente, this.cliente.id).then(() => {
    loading.dismiss();
    document.getElementById("showDataContact").style.display="block"
    document.getElementById("divEditContacto").style.display="none"
    document.getElementById("closeEdit").style.display="none"
    document.getElementById("btnSave").style.display="none"
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
