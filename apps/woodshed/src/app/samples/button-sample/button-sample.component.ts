import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-sample',
  standalone: true,
  imports: [CommonModule, MatAnchor, MatButton, MatDivider, MatFabButton, MatIcon, MatIconButton, MatMiniFabButton, RouterLink],
  templateUrl: './button-sample.component.html',
  styleUrl: './button-sample.component.scss',
})
export class ButtonSampleComponent {}
