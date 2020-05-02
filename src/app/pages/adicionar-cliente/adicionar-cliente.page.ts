import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {  ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.page.html',
  styleUrls: ['./adicionar-cliente.page.scss'],
})
export class AdicionarClientePage implements OnInit {
  @ViewChild('strName', null) strName: any;
  @ViewChild('strPhoneNumber', null) strPhoneNumber: any;
  @ViewChild('strObs', null) strObs: any;

 
  constructor(private webservice: ApiService, 
              private route: ActivatedRoute, 
              private router:Router,
              private nav: NavController, 
              private loadingController: LoadingController,
              public user:UserService) { 

              }

              ngOnInit() {
              
              }
             
      
             
async saveCliente() {
    let user:any = this.user._currentUser;
      
      if( this.strName.value == '')
      {
        return
      }

        const loading = await this.loadingController.create({
        message: 'A criar cliente..'
        });
        await loading.present();

          this.webservice.insertClients(this.strName.value, this.strPhoneNumber.value, this.strObs.value,user.id).then((data) => {
            let resp:any = data;

            if(resp.Status == true){
              this.router.navigate(["tabs/tab1"]);
            }else{
              alert(resp.msg);
            }

          loading.dismiss();                    
          }); 

} 
}
