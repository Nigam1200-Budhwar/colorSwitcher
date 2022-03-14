import { Injectable } from '@angular/core';
import { Color } from './color';
import { COLORS } from './colors-list';

@Injectable({
  providedIn: 'root'
})
export class ColorServiceService {

  constructor() { }

  getColors1(): Color[] {
    return COLORS;
  }
}
