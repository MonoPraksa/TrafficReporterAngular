import { Component, ElementRef } from '@angular/core';

import { CausesService } from './causes.service';
import { CommunicationService } from './communication.service';

import { Cause } from './causes';


@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })

  export class MenuComponent{   // menu component shows available filters

    constructor(private elementRef: ElementRef,
                private causesService: CausesService,
                private communicationService: CommunicationService
                ) { }


  apply(){          // function that applies filters
    let filter=0;
    for(let i=0; i+1<this.elementRef.nativeElement.children[0].children.length;i++) // go trough all except last element (it is a button)
      if(this.elementRef.nativeElement.children[0].children[i].children[0].checked) // if input is checked
        filter+=Number(this.elementRef.nativeElement.children[0].children[i].children[0].value);   // add his value filter
    this.communicationService.setFilter(filter);                                    
    this.communicationService.menuStateHidden=true;                                 // hide the menu
    this.communicationService.activate(true);                                       // refresh markers on map
  }

  }
  