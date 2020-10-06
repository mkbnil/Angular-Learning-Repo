import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = '';
  serverCreationStatus = 'No server was created';
  allowNewServer = false;


  constructor() { 
    
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server Created';
  }

  onUpdateServerName(event :Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
