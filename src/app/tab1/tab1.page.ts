import { Component, ViewChild } from '@angular/core';
import { Cliente, ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  clientes: Cliente[];

  constructor(private webservice: ApiService,private router: Router) { }
  @ViewChild('searchInput', null) searchInput: any;

  allData = []; //Store all data from provider
  filterData = [];//Store filtered data
  ngOnInit() {
    this.webservice.GetClientes().subscribe(res => {
      this.clientes = res;

      this.allData = this.clientes;
      this.filterData = this.allData;


      console.log( this.clientes);
    });
  }
  initializeItems(): void {
   
  }
  filterList(val) {
      this.filterData = this.allData.filter((cliente) => {
        console.log(cliente);
      return cliente.nome.toLowerCase().indexOf(this.searchInput.value.toLowerCase()) > -1;
    });
  }
  remove(item) {
    this.webservice.removeCliente(item.id);
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
