import { Component, OnInit } from '@angular/core';
import { Cliente, ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.page.html',
  styleUrls: ['./adicionar-cliente.page.scss'],
})
export class AdicionarClientePage implements OnInit {
  cliente: Cliente = {
    nome: '',
    telemovel: '',
    clienteObs:''
  };
  todoId = null;
  constructor(private webservice: ApiService, 
              private route: ActivatedRoute, 
              private nav: NavController, 
              private loadingController: LoadingController) { }

              ngOnInit() {
                this.todoId = this.route.snapshot.params['id'];
                console.log(this.todoId);
                if (this.todoId)  {
                  this.loadClientes();
                }
              }
             
              async loadClientes() {
                const loading = await this.loadingController.create({
                  message: 'Loading Todo..'
                });
                await loading.present();
             
                this.webservice.getClient(this.todoId).subscribe(res => {
                  loading.dismiss();
                  this.cliente = res;
                });
              }
             
              async saveCliente() {
                if( this.cliente.nome == '' ||  this.cliente.telemovel == ''){
                  return
                }


                const loading = await this.loadingController.create({
                  message: 'A guardar cliente..'
                });
                await loading.present();
                
                this.webservice.addTodo(this.cliente).then(() => {
                    loading.dismiss();                    
                });
                
              } 
}
