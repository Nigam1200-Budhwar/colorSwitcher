import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-background-color',
  templateUrl: './background-color.component.html',
  styleUrls: ['./background-color.component.scss']
})
export class BackgroundColorComponent implements OnInit {
  color_change:string="";
@Input()colorsselected:string;
@Output()seeItem:EventEmitter<any>= new EventEmitter()

  constructor() { }

  ngOnChanges(){
   // if(this.colorsselected)
      this.color_change="color changed to "+this.colorsselected;
  }


  ngOnInit(): void {
    
  }
  sendItem(){
    let item={name:'Data Received by Color Selector Component',status:'Complete'}
    this.seeItem.emit(item)
  }
}
