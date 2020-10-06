import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .white-text{
        color:white;
    }
    `]
})
export class ServerComponent{

    serverStatus = 'offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    
}