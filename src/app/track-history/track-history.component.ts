import { Component } from '@angular/core';

@Component({
  selector: 'track-history',
  templateUrl: './track-history.component.html',
  styleUrls: ['./track-history.component.css'],
})
export class TrackHistoryComponent {
  trackHistory: string[] = [];

  addEntry(action: 'Increment' | 'Decrement' | 'Reset', value: number) {
    let entryText = '';

    switch (action) {
      case 'Increment':
        entryText = `[+1] Counter is now ${value}`;
        break;
      case 'Decrement':
        entryText = `[-1] Counter is now ${value}`;
        break;
      case 'Reset':
        entryText = `[Reset] Counter is now ${value}`;
        break;
    }

    this.trackHistory.push(entryText);
  }

  clearHistory() {
    this.trackHistory.length = 0;
  }
}
