import { Routes } from '@angular/router';
import { ChapterList } from './chapter-list/chapter-list';
import { ChapterView } from './chapter-view/chapter-view';

export const routes: Routes = [
  { path: '', component: ChapterList },
  { path: 'chapter/:id', component: ChapterView }
];

//this is the "map" of the links. Think of this like a phonebook: you want to find a number? Look here. Once you find the number, RouterLink will essentially let you dial that number,
//or in this case, create the link that sends you to the chapter
