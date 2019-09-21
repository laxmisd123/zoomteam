import { Component } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
selector: 'courses',
template:'<div (click)="onSaveClicked()"><button (click)="onSave($event)">Save</button></div>'
 })
 export class CoursesComponent {
   onSave($event){
     $event.stopPrapogation();
     console.log("button was clicked",$event  );
   }
   onSaveClicked($event){
     console.log("div was clicked");
   }
 }
