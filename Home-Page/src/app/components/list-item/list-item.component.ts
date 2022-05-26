import { Component, Input, ɵɵresolveWindow } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() content: string = '';
  @Input() linkList: string[] = [];
  constructor() { }

/**
 * opens all links passed in links array
 * 
 * @param links list of links to open in new windows
 */
  openLinks(links: string[] = this.linkList) {
    links.forEach((link: string)=>{
      window.open(link, "_blank");
    });
  }
}
