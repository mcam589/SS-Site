import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChapterView } from './chapter-view/chapter-view';
import { CHAPTERS } from './chapter.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChapterView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
  protected readonly firstChapter = CHAPTERS[0];
}
