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
                if (this.todoId)  {
                  this.loadTodo();
                }
              }
             
              async loadTodo() {
                const loading = await this.loadingController.create({
                  message: 'Loading Todo..'
                });
                await loading.present();
             
                this.webservice.getTodo(this.todoId).subscribe(res => {
                  loading.dismiss();
                  this.cliente = res;
                });
              }
             
              async saveTodo() {
             
                const loading = await this.loadingController.create({
                  message: 'Saving Todo..'
                });
                await loading.present();
             
                if (this.todoId) {
                  this.webservice.updateTodo(this.cliente, this.todoId).then(() => {
                    loading.dismiss();
                    
                  });
                } else {
                  this.webservice.addTodo(this.cliente).then(() => {
                    loading.dismiss();
                    
                  });
                }
              } 
}
