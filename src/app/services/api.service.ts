import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  obsevacoes:string,
  data2:string
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    /* 
     criação de tabelas na base de dados
    
    */

  private ClientesCollection: AngularFirestoreCollection<Cliente>;
  private MarcacoesCollection: AngularFirestoreCollection<Marcacoes>;
  private clientes: Observable<Cliente[]>;
  private marcacoes: Observable<Marcacoes[]>;


  constructor(db: AngularFirestore)  { 
/* 
     criação de tabelas na base de dados
    
    */
    this.ClientesCollection = db.collection<Cliente>('clientes');
    this.MarcacoesCollection = db.collection<Marcacoes>('Marcacoes');

    this.clientes = this.ClientesCollection.snapshotChanges().pipe(
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
    );
  }

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





  /* 
    MARCAÇÔES

  */

 Getmarcacoes(){
  return this.marcacoes;
}

  addMarcacao(marcacao: Marcacoes) {
    return this.MarcacoesCollection.add(marcacao);
  }



}
