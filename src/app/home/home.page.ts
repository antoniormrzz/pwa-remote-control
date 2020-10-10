import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  async play_pause() {
    await fetch('/play-pause');
  }

  async volume_up() {
    await fetch('/volume-up');
  }
  async volume_down() {
    await fetch('/volume-down');
  }
  async rewind() {
    await fetch('/rewind');
  }
  async fast_forward() {
    await fetch('/fast-forward');
  }

}
