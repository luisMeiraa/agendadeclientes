import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcacoes, ApiService } from 'src/app/services/api.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-marcacao',
  templateUrl: './adicionar-marcacao.page.html',
  styleUrls: ['./adicionar-marcacao.page.scss'],
})
export class AdicionarMarcacaoPage implements OnInit {
  @ViewChild('txtObservacoes', null) txtObservacoes: any;
  @ViewChild('txtTratamento', null) txtTratamento: any;
  @ViewChild('txtData', null) txtData: any;
  @ViewChild('txtHora', null) txtHora: any;


cliente:any;
marcacao: Marcacoes = {
  id_cliente:'',
  cliente:'',
  data:'',
  hora:'',
  tratamento:'',
  obsevacoes:'',
  data2:''
  };
  constructor(public toastController: ToastController,public navCtrl: NavController,private route: ActivatedRoute,private router: Router,private webservice: ApiService,) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.cliente = this.router.getCurrentNavigation().extras.state.cliente;
      
     console.log( this.cliente);
    }
   }

  ngOnInit() {
  }


  addMarcacao(){
    this.marcacao.data2 = this.txtData.value.substring(0,10);
    this.txtData.value.substring(0,10);
    let ano = this.txtData.value.substring(0,4)
    let mes = this.txtData.value.substring(5,7)
    let dia = this.txtData.value.substring(8,10)
    this.txtData.value = dia+'/'+mes+'/'+ano
    this.txtHora.value.substring(11,16)
    this.marcacao.id_cliente = this.cliente.id;
    this.marcacao.cliente = this.cliente.nome;
    this.marcacao.obsevacoes = this.txtObservacoes.value;
    this.marcacao.tratamento = this.txtTratamento.value;
    this.marcacao.data =  this.txtData.value;
    this.marcacao.hora =   this.txtHora.value.substring(11,16);
    this.webservice.addMarcacao(this.marcacao).then(async (data) => {
      console.log(data);
      this.navCtrl.back()
      const toast = await this.toastController.create({
        message: 'A sua marcação foi adicionada com sucesso.',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    });
  }

}
