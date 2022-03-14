import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Color } from '../color';
import { ColorServiceService } from '../color-service.service';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})

export class ColorSelectorComponent implements OnInit {
  username:string='';
  username1:string='';
  color:Color[]=[];
  boxclass:string = "box";
  colorsel:string;
  obj = {value: 0};
  @Output() parentFunction:EventEmitter<any>= new EventEmitter()

  info:string;
  value: number;
  itemFunction(item){
    console.warn(item)
    this.info = item.name;
  }

  

  constructor(private ColorServiceService: ColorServiceService) { }

  getColors(): void {
    this.color = this.ColorServiceService.getColors1();
  }
  
  ngOnInit(){
    this.getColors();
  }
  sendData(){
    let data={name:'Data Received by Parent Component',nationality:'Indian'}
    this.parentFunction.emit(data)
  }

  clickme(){
    this.username1=this.username;
    console.log('Username',this.username)
  }

  CheckColor(col: Color): Color{
    console.log("Value type= "+typeof(this.value))
    console.log("Id type= "+typeof(col.Id))
    if(col.Id===this.value)
      return col;
  } 

 getcolor(event:any) { 

    let Id:number = parseInt(event.target.value);
    console.log("Id type initial= "+typeof(Id))
    console.log("Id= "+Id)
    let color1:Color;
    /*for(let i=0; i<this.color.length; i++) {
      if(this.color[i].Id == Id) {
       color = this.color[i];
       this.colorsel = this.color[i].Name;
       break;
      }
    }*/
    this.obj.value=Id;
    console.log("Obj after= "+ this.obj.value)
    color1 = this.color.find(this.CheckColor,this.obj)
    console.log(color1)
    //color1 = this.color[Id]
    this.colorsel = color1.Name;
 this.boxclass = "box"+ color1.label;
 }
}



