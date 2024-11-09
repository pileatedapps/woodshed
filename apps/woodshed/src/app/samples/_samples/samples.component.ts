import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-samples',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss',
})
export class SamplesComponent {}
