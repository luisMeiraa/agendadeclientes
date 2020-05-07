import { UserService } from './user.service';
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';




@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }; 





  constructor(db: AngularFirestore,public httpClient: HttpClient, public user:UserService, private loadingController: LoadingController,public toastController: ToastController)  { 
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'dark',
      position: 'top'
    });
    toast.present();
  }

  loading:any;
  async presentLoading(msg){
     this.loading = await this.loadingController.create({
      message: msg
    });
    await this.loading.present(); 
  }

  async dissmissLoading(){
    this.loading.dismiss(); 
  }



  loginLaravel(email,password){
      
    let url='http://wh486292.ispot.cc/public/api/Auth/consulta';

    let body={
      strEmail: email,
      strPassword: password
    };    

    return new Promise(resolve => {
      this.httpClient.post(url,body).subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        
      });
    });  
  } 


  register(email,name,password){
    let url='http://wh486292.ispot.cc/public/api/Auth/insert';
    let body={
      strEmail: email,
      strName:name,
      strPassword: password
    };  

    return new Promise(resolve => {
      this.httpClient.post(url,body).subscribe(data => {

        resolve(data);
      }, err => {
        
      });
    });  
  }

  insertClients(strName, strPhoneNumber,strObs, idUser){
    let url='http://wh486292.ispot.cc/public/api/Clients/createClient';

    let body={
      strPhoneNumber: strPhoneNumber,
      strName:strName,
      strObs: strObs,
      idUser: idUser
    };  

    return new Promise(resolve => {
      this.httpClient.post(url,body).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        
      });
    });
  }



  getClientsByIdUser(idUser){
    let url='http://wh486292.ispot.cc/public/api/Clients/getClientByIdUser';

    let body={
      idUser: idUser
    };  

    return new Promise(resolve => {
      this.httpClient.post(url,body).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        
      });
    });
  }

  DeleteCliente(client){
    
    let url='http://wh486292.ispot.cc/public/api/Clients/DeleteCliente';

    let body={
      idUser: client.idUser,
      id: client.id
    };  

    return new Promise(resolve => {
      this.httpClient.post(url,body).subscribe(data => {
        console.log(data);
        resolve(data);
        console.log(data);
      }, err => {
        
      });
    });
  }

  UpdateClient(cliente,user){
   
    let url='http://wh486292.ispot.cc/public/api/Clients/UpdateCliente';

    let body={
      idUser: user.id,
      id: cliente.id,
      strName:cliente.strName,
      strPhoneNumber:cliente.strPhoneNumber,
      strObs:cliente.strObs
    };  
    console.log(body);
      return new Promise(resolve => {
      this.httpClient.post(url,body).subscribe(data => {
     
        resolve(data);
        console.log(data);
      }, err => {
        
      });
    });  
  }


      /* 
       *            
       *
       *   MARCAÇÕES
       * 
       * 
      */

    createAppointment(appointment)
    {
      let url='http://wh486292.ispot.cc/public/api/appointments/createAppointment';

      let body = appointment;
console.log(appointment);
      return new Promise(resolve => {
        this.httpClient.post(url,body).subscribe(data => {
       
          resolve(data);
          console.log(data);
        }, err => {
          
        });
      }); 
    }

    getAppointmentsByUser(idUser,id_client){
      let url='http://wh486292.ispot.cc/public/api/appointments/getAppointmentsByUser';
  
      let body={
        idUser: idUser,
        id_client:id_client
      };  
  
      return new Promise(resolve => {
        this.httpClient.post(url,body).subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          
        });
      });
    }

    getAppointments(idUser,ScheduleDate){
      let url='http://wh486292.ispot.cc/public/api/appointments/getAppointments';
  
      let body={
        idUser: idUser,
        strDateUTC: ScheduleDate
      };  
  
      return new Promise(resolve => {
        this.httpClient.post(url,body).subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          
        });
      });
    }

    deleteAppointment(idUser,id ){
      let url='http://wh486292.ispot.cc/public/api/appointments/deleteAppointments';
  
      let body={
        idUser: idUser,
        id : id 
      };  
  
      return new Promise(resolve => {
        this.httpClient.post(url,body).subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          
        });
      });
    }

    GetAllAppointments(idUser){
      let url='http://wh486292.ispot.cc/public/api/appointments/appointments';
  
      let body={
        idUser: idUser,
       
      };  
  
      return new Promise(resolve => {
        this.httpClient.post(url,body).subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          
        });
      });
    }

}
