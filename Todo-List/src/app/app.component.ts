import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  tasks: any[] = [];
  id_count: number = 0;
  input: string = "";
  show_save = false;
  id_temp = "";

  addTask(text: string) {
    if (!text) return;
    const unique_id: string = 'ID' + this.id_count; 
    this.tasks.push({
      id: unique_id,
      name: text
    });
    this.id_count++;
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((current) => current.id !== id);
  }

  editTask(id: string) {
    this.tasks.map((current) => {
      if (current.id === id) {
        this.input = current.name;
        this.id_temp = id;
      }
    });
  }

  saveTask(text: string) {
    this.tasks.map(current => {
      if (current.id === this.id_temp) {
        current.name = text;
      }
    })
    this.id_temp = "";
    this.show_save = false;
  }
}
