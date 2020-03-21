import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ficha-cliente',
  templateUrl: './ficha-cliente.page.html',
  styleUrls: ['./ficha-cliente.page.scss'],
})
export class FichaClientePage implements OnInit {
  
  @ViewChild('txtNome', null) txtNome: any;
  @ViewChild('txtTelemovel', null) txtTelemovel: any;
  public cliente:any;


  constructor(private route: ActivatedRoute,private router: Router) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.cliente = this.router.getCurrentNavigation().extras.state.cliente;
      
   
    }
  }

  ngOnInit() {
  }

}
