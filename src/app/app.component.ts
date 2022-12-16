import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sample Scanner App';
  newItem = '';

  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  myFunc(val: string) {
    window.alert('Current scanner value: ' + val);
  }
}
