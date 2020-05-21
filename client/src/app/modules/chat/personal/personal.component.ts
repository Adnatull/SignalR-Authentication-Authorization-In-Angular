import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  private hubConnection: signalR.HubConnection;
  model: any = {};
  token: any;
  history: any = new Array();
  constructor() { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.configureConnection();
    this.startConnection();
    this.hubConnection.onclose(() => {
      this.startConnection();
    });
  }

  sendMessage() {
    const msg = 'Me :' + ' ' + this.model.Message;
    this.history.push(msg);
    console.log(this.model);
    this.hubConnection.invoke('Send', JSON.stringify(this.model) );
  }



  receiveData() {
    this.hubConnection.on('Send', (data) => {
      console.log(data);
      console.log('received')
      this.history.push(data);
    });
  }

  sendData() {
    this.hubConnection.invoke('Send', 'Hello');
  }

  configureConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      // .configureLogging(signalR.LogLevel.Debug)
      .withUrl('http://localhost:5000/message', {
        // skipNegotiation: true,
        // transport: signalR.HttpTransportType.WebSockets
         accessTokenFactory: () => this.token
      })
      .build();
  }

  startConnection() {
    this.hubConnection
      .start()
      .then(() => {
        console.log('connection started');
        // this.sendData();
        this.receiveData();
      })
      .catch((err) => console.log('error while starting connection: ' + err));
  }

}
