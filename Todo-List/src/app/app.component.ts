import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  
  tasks:any[] = [];
  
  addTask(text: string) {
    this.tasks.push({
      id : this.tasks.length,
      name : text
    });
  }

}
