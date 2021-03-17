import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:"server",name:"Test Server", content: "Just a test"}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bulePrintData:{serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: bulePrintData.serverName,
      content: bulePrintData.serverContent
    });
  }

}
