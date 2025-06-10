import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { TrackHistoryComponent } from '../track-history/track-history.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 0;
  history!: number[];
  @ViewChild('trackHistory') tracking!: TrackHistoryComponent;

  ngAfterViewInit(): void {
    this.tracking.addEntry('Reset', this.count); // Initial entry
  }

  increment() {
    this.count++;
    this.tracking.addEntry('Increment', this.count);
  }

  decrement() {
    this.count--;
    this.tracking.addEntry('Decrement', this.count);
  }

  reset() {
    this.count = 0;
    this.tracking.addEntry('Reset', this.count);
  }
}
