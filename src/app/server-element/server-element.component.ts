import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  DoCheck, 
  Input, 
  OnChanges,
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //Native Emulated
})
export class ServerElementComponent implements
 OnInit , 
 OnChanges ,
 DoCheck , 
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked{
@Input('srvElement') element: {type: string, name: string, content: string}
  
constructor() { 
    console.log('Constructor Called!');
  }
  ngOnChanges( changes:SimpleChanges ){
    console.log('ngOnChanges Called!');
    console.log(changes.currentValue +','+ changes.previousValue);
  }
  ngOnInit(): void {
    console.log('ngOnInit Called!');
  }
  ngDoCheck(){
  console.log('ngDoCheck Called!');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit Called!');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Called!');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit Called!');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Called!');
  }

}
