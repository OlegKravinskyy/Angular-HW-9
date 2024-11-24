import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() filter = new EventEmitter<string>();

  colors = ['red', 'blue', 'green'];

  onFilterChange(color: string): void {
    this.filter.emit(color);
  }
}
