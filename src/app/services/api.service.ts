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

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private ClientesCollection: AngularFirestoreCollection<Cliente>;
  private clientes: Observable<Cliente[]>;


  constructor(db: AngularFirestore)  { 

    this.ClientesCollection = db.collection<Cliente>('clientes');

    this.clientes = this.ClientesCollection.snapshotChanges().pipe(
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
 
  addTodo(cliente: Cliente) {
    return this.ClientesCollection.add(cliente);
  }
 
  removeCliente(id) {
    return this.ClientesCollection.doc(id).delete();
  }
}
