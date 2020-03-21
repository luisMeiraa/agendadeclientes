import { Component } from '@angular/core';
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


  ngOnInit() {
    this.webservice.GetClientes().subscribe(res => {
      this.clientes = res;
      console.log( this.clientes);
    });
  }

  
  remove(item) {
    this.webservice.removeTodo(item.id);
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
