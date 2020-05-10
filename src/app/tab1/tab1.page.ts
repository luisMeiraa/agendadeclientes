import { UserService } from './../services/user.service';
import { Component, ViewChild } from '@angular/core';
import {  ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FiltersComponent } from '../components/filters/filters.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   @ViewChild('textSearchValue',null) textSearchValue : any;

 clientes:any;
 _user:any;
  constructor(   
    private popoverCtrl : PopoverController, 
    private webservice: ApiService,
    private router: Router, 
    public user:UserService) { 
     this._user = this.user._currentUser;
   

   this.getClients();
  }
 

  ngOnInit() {
    

    
  }

  getClients(){
    this.webservice.getClientsByIdUser(this._user.id).then(data=>{
      this.clientes = data;
      this.clientes = this.clientes.client;
      
    });
  }


  async menu(event: any){

    let popover = await this.popoverCtrl.create({
      component : FiltersComponent,
      event : event,
    });

  


    popover.onDidDismiss()
    .then((result) => {
      console.log(result['data'].clientes);
     this.clientes = result['data'].clientes;
    }); 
    
    return await popover.present();
}


searchContacts()
  {
    this.webservice.searchClients(this._user.id,this.textSearchValue.value).then(data=>{
      this.clientes = data['client'];
    });
  }

  doRefresh(event) {
    this.getClients();

    setTimeout(() => {
      
      event.target.complete();
    }, 2000);
  }

 

  navToCliente(cliente){
    let navigationExtras: NavigationExtras = {
      state: {
          cliente: cliente,
          
      }
  };
  this.router.navigate(['ficha-cliente'], navigationExtras);
  }

}






  /* filterList(val) {
      this.filterData = this.allData.filter((cliente) => {
        console.log(cliente);
      return cliente.nome.toLowerCase().indexOf(this.searchInput.value.toLowerCase()) > -1;
    });
  }
  remove(item) {
    this.webservice.removeCliente(item.id);
  } */

 /*   this.webservice.GetClientes().subscribe(res => {
      this.clientes = res;

      this.allData = this.clientes;
      this.filterData = this.allData;


      console.log( this.clientes);
    }); */