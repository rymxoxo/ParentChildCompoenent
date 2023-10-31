import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() questionStudent:string='';
  answerStudent:string='';
  @Output() finalStudentAnswer =new EventEmitter<string>();

  sendAnswer(){
    this.finalStudentAnswer.emit(this.answerStudent);

  }
}
