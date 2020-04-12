import { element } from 'protractor';
import { Marcacoes, ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  constructor(private webservice: ApiService,private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) {}


ngOnInit() {
/*   this.webservice.Getmarcacoes().subscribe(res => {
    this.marcacoes = res;
    for(var i = 0; i<this.marcacoes.length;i++){
      this.event.startTime = this.marcacoes[i].data2 + "T13:00:27.25";
      this.event.endTime = this.marcacoes[i].data2+ "T13:00:27.25";
      this.addEvent();
    }
    
    });  */
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
  console.log(ev);

 
  
  let selected = new Date(ev.selectedTime);
  this.ScheduleDate = selected.toISOString();
  console.log( this.ScheduleDate);
  this.ScheduleDate.substring(0,10);

      let ano =  this.ScheduleDate.substring(0,4)
      let mes =  this.ScheduleDate.substring(5,7)
      let dia =  this.ScheduleDate.substring(8,10)
       this.ScheduleDate = dia+'/'+mes+'/'+ano

       //this.ScheduleDate = selected.getFullYear()+"/"+(selected.getMonth()+1) +"/"+ selected.getUTCDate();
  console.log( this.ScheduleDate);


/* this.webservice.Getmarcacoes().subscribe(res => {
    this.allData = res;
    this.marcacoes = this.allData.filter((marcacao) => {
      console.log(marcacao);
      return marcacao.data ==  this.ScheduleDate
  });
  console.log(this.marcacoes); 
  

}); */



 /*  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString()); */
}
}
