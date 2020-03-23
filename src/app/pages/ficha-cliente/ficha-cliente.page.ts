import { PopoverComponent } from './../../popover/popover.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public cliente:any;


  constructor(private route: ActivatedRoute,private router: Router,private popoverCtrl : PopoverController, private webservice: ApiService,private loadingController: LoadingController) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.cliente = this.router.getCurrentNavigation().extras.state.cliente;
      
   
    }
  }

  ngOnInit() {
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
this.webservice.updateTodo(this.cliente, this.cliente.id).then(() => {
    loading.dismiss();
    document.getElementById("lblNome").style.display="block"
    document.getElementById("lblTelemovel").style.display="block"
    document.getElementById("inpuName").style.display="none"
    document.getElementById("inpuTelemovel").style.display="none"
    document.getElementById("btnSave").style.display="none"
  });
}

}
