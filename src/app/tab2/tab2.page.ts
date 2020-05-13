import { UserService } from 'src/app/services/user.service';
import { element } from 'protractor';
import {  ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
  @ViewChild(CalendarComponent,{static: false}) myCal: CalendarComponent;

  marcacoes:any=[];
  user:any;
  datasMarcacoes:any;
  constructor(
    private router:Router,
    private webservice: ApiService,
    private alertCtrl: AlertController, 
    @Inject(LOCALE_ID) 
    private locale: string, 
    public userService:UserService,
    public actionSheetController: ActionSheetController) {
    this.user = this.userService._currentUser;
    console.log(this.user.id);

   
  }

  ionViewWillEnter(){
    this.webservice.GetAllAppointments(this.user.id).then(data=>{
      let resp:any = data;

      this.datasMarcacoes=resp.appointments

      console.log( this.datasMarcacoes);

      for(var i = 0; i < this.datasMarcacoes.length ; i++ ){

        this.datasMarcacoes[i].strDateUTC = this.datasMarcacoes[i].strDateUTC.replace(/\./g,'-');

        this.event.startTime = this.datasMarcacoes[i].strDateUTC + "T13:00:27.25";
        
        this.event.endTime = this.datasMarcacoes[i].strDateUTC+ "T13:00:27.25";
        this.addEvent();
  
  
      }
  }); 
  }

ngOnInit() {
 
}
  event = {
    id:'',
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  
  // Create the right event format and reload source
  addEvent() {

    let eventCopy = {
      title: this.event.title,
      startTime:  new Date( this.event.startTime),
      endTime: new Date(this.event.endTime),
      desc: this.event.desc
    }
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();

  }


 // Change current month/week/day
 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
/* changeMode(mode) {
  this.calendar.mode = mode;
} */
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}
 
// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
public allData:any;
public ScheduleDate:any;
// Time slot was clicked 
onTimeSelected(ev) {
   let selected = new Date(ev.selectedTime);
  
   this.ScheduleDate = selected.toISOString();
   this.ScheduleDate=this.ScheduleDate.substring(0,10);
  




      this.webservice.getAppointments( this.user.id, this.ScheduleDate).then(data=>{
                console.log(data);
      let resp:any = data;
                  this.marcacoes = resp.appointments;
      }) 

  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString()); 
}

 async deleteAppointment(appointment){

 
  
    const actionSheet = await this.actionSheetController.create({
      header: 'Deseja apagar a marcação?',
      buttons: [{
        text: 'Apagar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
        console.log(appointment);
        this.webservice.deleteAppointment(this.user.id,appointment.id).then(data=>{
          this.webservice.presentToast('Marcação eliminada com sucesso.')
          this.today();
        });
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
         
        }
      }]
    });
    await actionSheet.present();
  
    
  }

  addAppointment(){
    let navigationExtras: NavigationExtras = {
        state: {
            cliente: 'ko',
            
          }
     };
  this.router.navigate(['adicionar-marcacao'], navigationExtras);
  }
}
