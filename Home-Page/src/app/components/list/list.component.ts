import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  contentList: any[] = [
   {
     links: [
      "https://www.github.com",
      "https://securityinjections.slack.com/ssb/redirect", 
      "https://app.shortcut.com/clarkcan/stories/space/8631/everything"], content: "Work"
   },{
     links: [
      "https://www.reddit.com",
      "https://youtube.com"], content: "Goof"
   },{
     links: [
       "https://docs.google.com/spreadsheets/d/1l_oIyspJGu6oTyIZfaYB08pPRotj4rhcKc-A_TBCzYU/edit#gid=2068956548",
       "https://docs.google.com/spreadsheets/d/1rVfGJIQs-Mge78jUAgu1uzU2yGFriE13yjejgwJpckc/edit#gid=740410078",
       "https://docs.google.com/document/d/1O_dMua_9MEifIoAEfnxSJMxwqGYPJQCA9c4dqgxriUg/edit#heading=h.ct47jpht9ttq",
       "https://discord.com/channels/356814364243787777/433647634394120192"
     ], content: "L8nite"
   }
  ]
  constructor() { }

}
