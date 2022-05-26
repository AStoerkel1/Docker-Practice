import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contentList: any[] = [
   {
     link: "https://www.youtube.com", content: "YouTube"
   },{
     link: "https://www.reddit.com", content: "Reddit"
   }
  ]
  listCount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
