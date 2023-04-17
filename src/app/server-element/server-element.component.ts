import { Component, OnInit, OnChanges, Input, ViewEncapsulation, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Optionen: None oder Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
@Input('srvElement') element: {type: string, name: string, content: string };
@Input() name: string;
@ViewChild('heading', {static:true}) header: ElementRef;
@ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;
  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){
console.log('ngOnChanges called!');
console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    //returns empty
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit checked!");
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
console.log('AfterViewChecked called!');
    }

    ngOnDestroy() {
      console.log('ngOnDestroy called!');
    }
}
