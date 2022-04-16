import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchpadComponent implements OnInit {

  apps = [
    'mission-control',
    'siri',
    'home',
    'safari',
    'calculator',
    'dictionary',
    'books',
    'stock',
    'pages',
    'keynote',
    'numbers',
    'i-movies',
    'garage-band',
    'voice-memos',
    'tv',
    'podcasts',
    'preview',
    'photos',
    'find-my',
    'facetime',
    'notes',
    'reminders',
    'contacts',
    'mail',
    'app-store',
    'chrome',
    'messages',
    'music'
  ];

  constructor() { }

  ngOnInit() {
  }

}
