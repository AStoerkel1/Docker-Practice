import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  contentList: any[] = [
   {
     links: ["https://www.github.com", "https://securityinjections.slack.com/ssb/redirect"], content: "Work"
   },{
     links: ["https://www.reddit.com", "https://youtube.com"], content: "Play"
   }
  ]
  constructor() { }

}
