import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages:string[]= [];

  add(message:string){
    this.messages.push(message);
  } //liste üzerine eleman ekleyen bir metot

  clear( ){
    this.messages=[];
  }
  //observable olmasına gerek yok çünkü işlemler http üzerinden değil liste üzerinden
  //servis üzerinden kayıt etmek istediğimizde asenkron çalışacağımız için observable olmalı
  constructor() { }
}
