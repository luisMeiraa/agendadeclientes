import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilizador {
  
  public idUser: string = "";
  public strEmail: string = "";
  public strPassword: string = "";
  
  constructor() {

  }

}
export class UserService {

  public  _currentUser:Utilizador;

}
