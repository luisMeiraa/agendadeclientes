import { PopoverController } from '@ionic/angular';
import { UserService } from './../../services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  currentUser:any;
  constructor(public webService:ApiService, private user:UserService, private popoverController:PopoverController) {
  this.currentUser = this.user._currentUser;
   }

  ngOnInit() {}

  orderby(typeOfOrder){
 
      this.webService.GetClientsByOrder(this.currentUser,typeOfOrder).then(data=>{
        let resp:any = data;

        console.log(data);
         this.popoverController.dismiss({
          'clientes': resp.client
        }) 

      });
  }


}
