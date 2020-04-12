import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';


export interface Cliente {
  id?: string;
  nome: string;
  telemovel: string;
  clienteObs:string
}
export interface Marcacoes{
  id?: string,
  id_cliente:string,
  cliente:string,
  data:string,
  hora:string,
  tratamento:string,
  obsevacoes: string ,
  data2:string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }; 
  public url = 'http://192.168.1.77/crud.php';  
    /* 
     criação de tabelas na base de dados
    
    */
/*   private ClientesCollection: AngularFirestoreCollection<Cliente>;
  private MarcacoesCollection: AngularFirestoreCollection<Marcacoes>;
   private clientes: Observable<Cliente[]>;
  private marcacoes: Observable<Marcacoes[]>;  */


  constructor(db: AngularFirestore,public httpClient: HttpClient)  { 
/* 
     criação de tabelas na base de dados
    
    */
    /* this.ClientesCollection = db.collection<Cliente>('clientes');
    this.MarcacoesCollection = db.collection<Marcacoes>('Marcacoes');
 */
    

/*     this.clientes = this.ClientesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ... data };
        });
      })
    );

    this.marcacoes = this.MarcacoesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ... data };
        });
      })
    ) */


  }
/* 
  GetClientes(){
    return this.clientes;
  }

  getClient(id) {
    return this.ClientesCollection.doc<Cliente>(id).valueChanges();
  }
 
  updateCliente(cliente: Cliente, id: string) {
    return this.ClientesCollection.doc(id).update(cliente);
  }
 
  addCliente(cliente: Cliente) {
    return this.ClientesCollection.add(cliente);
  }
 
  removeCliente(id) {
    return this.ClientesCollection.doc(id).delete();
  }


 */


  /* 
    MARCAÇÔES

  */

/*  Getmarcacoes(){
  return this.marcacoes;
}

  addMarcacao(marcacao: Marcacoes) {
    return this.MarcacoesCollection.add(marcacao);
  }
 */

 /*

  getClientesPHP() {
    let url = 'http://localhost/crud.php?route=';

     return new Promise(resolve => {
      this.httpClient.get(url + "lista" ).subscribe(data => {
        resolve(data);      
      }, err => {
        alert("Não foi possível obter os documentos:" + err.message);
      });
    });  
   return this.httpClient.get(url + 'list').sub().then((response) => {
   console.log(response);

    }).catch((request) => {
      console.log(request);
    });;  
  }*/
/* 

  postAPI(){
 
    
    let body={
      route: 'insert',
      strName:'TESTE POST API'
    };    
console.log(body);
    return new Promise(resolve => {
      this.httpClient.post(this.url, body).subscribe(data => {
        console.log(data);
     
      }, err => {
        
      });
    });  
  } 



  login(email,password){
     
    let body={
      route: 'login',
      strEmail: email,
      strPassword: password
    };    

    return new Promise(resolve => {
      this.httpClient.post(this.url, body).subscribe(data => {
        console.log(data);
      }, err => {
        
      });
    });  
  }  */

  loginLaravel(email,password){
      
    let url='http://localhost:8000/api/Auth/consulta';

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
    let url='http://localhost:8000/api/Auth/insert';
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
    let url='http://localhost:8000/api/Clients/createClient';

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
    let url='http://localhost:8000/api/Clients/getClientByIdUser';

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

  DeleteCliente(idUser){
    let url='http://localhost:8000/api/Clients/DeleteCliente';

    let body={
      idUser: idUser
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

}
