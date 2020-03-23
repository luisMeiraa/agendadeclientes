import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController, PopoverController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
cliente:any;

  constructor( private popoverController: PopoverController,private route: ActivatedRoute, private navParams: NavParams, private webservice: ApiService,private loadingController: LoadingController ) { }

  ngOnInit() {
   
    
    this.cliente = this.navParams.get('cliente');
    console.log(this.cliente);
  }



  async editCliente(){
    document.getElementById("lblNome").style.display="none"
    document.getElementById("lblTelemovel").style.display="none"
    document.getElementById("inpuName").style.display="block"
    document.getElementById("inpuTelemovel").style.display="block"
    document.getElementById("btnSave").style.display="block"
    this.popoverController.dismiss();
    
  /* 
    const loading = await this.loadingController.create({
      message: 'A editar o contacto..'
    });
    await loading.present();
  this.webservice.updateTodo(this.cliente, this.cliente.id).then(() => {
      loading.dismiss();
      document.getElementById("lblNome").style.display="block"
      document.getElementById("lblTelemovel").style.display="block"
      document.getElementById("inpuName").style.display="none"
      document.getElementById("inpuTelemovel").style.display="none"
    }); */
  }
}
