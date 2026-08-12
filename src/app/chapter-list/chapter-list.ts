import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; //RouterLink is a built-in Angular directive that will turn plain elements into links
import { CHAPTERS } from '../chapter.data';

//this will loop through all chapters and link to them

@Component({
  selector: 'app-chapter-list',
  imports: [RouterLink],
  templateUrl: './chapter-list.html',
  styleUrl: './chapter-list.css',
})
export class ChapterList {
  protected readonly chapters = CHAPTERS; //displays the data array chapters to the template
}
