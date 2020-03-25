import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController, PopoverController, AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
cliente:any;

  constructor( 
    public alertController: AlertController,
    private popoverController: PopoverController,
    private route: ActivatedRoute, 
    private router:Router,
    private navParams: NavParams, 
    private webservice: ApiService,
    private loadingController: LoadingController ) { }

  ngOnInit() {
   
    
    this.cliente = this.navParams.get('cliente');
    console.log(this.cliente);
  }



  async editCliente(){
    document.getElementById("showDataContact").style.display="none"
    document.getElementById("divEditContacto").style.display="block"
    document.getElementById("btnSave").style.display="block"
    document.getElementById("closeEdit").style.display="block"
    this.popoverController.dismiss();
    
  }


  deleteCliente(){
    this.alertController.create({
      header: 'ATENÇÃO',
      message: 'Deseja mesmo eliminar este contacto?',
      buttons: [{
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'ELiminar',
          handler: () => {
           this.webservice.removeCliente(this.cliente.id);
           this.popoverController.dismiss();
           this.router.navigate(['tabs/tab1']);
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }
}
