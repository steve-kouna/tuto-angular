import { Pipe, PipeTransform } from '@angular/core';
import { Level } from '../models/Level.model';

const LEVELS: Record<Level, String> = {
  "J": "Junior",
  "M": "Middle",
  "S": "Senior",
};

@Pipe({
  name: 'level',
})
export class LevelPipe implements PipeTransform {
  transform(value: Level): String {
    return LEVELS[value] || value;
  }
}
