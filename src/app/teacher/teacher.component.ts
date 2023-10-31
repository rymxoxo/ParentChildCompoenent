import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  question:string='';
  response:string='';
  message:string='';
  constructor(){}
  ngOnInit(): void {
    this.question="which program language is used to develop angular project ? ";
    this.response='typescript' ;
  
}
correction(r:string){
  if (r==this.response){
      this.message= "YOU DID AMAZING WORK"
  }
  else
  this.message=  "YOU CAN DO IT TRY AGAIN  !"
}
}
