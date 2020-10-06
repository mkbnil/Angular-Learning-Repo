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
  showServerName = false;
  servers = [];

  constructor() { 
    
  setTimeout(() => {
    this.allowNewServer = true;
  }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.showServerName = !this.showServerName;
    this.servers.push(this.servers.length + 1);
  }

  onUpdateServerName(event :Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
