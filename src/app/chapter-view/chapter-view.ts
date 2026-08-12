import { Component, input } from '@angular/core';
import { Chapter } from '../chapter'; //pulls the chapter from the "Chapter" file, one folder up

@Component({
  selector: 'app-chapter-view',
  imports: [],
  templateUrl: './chapter-view.html',
  styleUrl: './chapter-view.css',
})
export class ChapterView {
  chapter = input.required<Chapter>(); //signal-based output; this component acts like the parameter of a function. It expects a "Chapter" object, and it will give an error if one is not provided
}
