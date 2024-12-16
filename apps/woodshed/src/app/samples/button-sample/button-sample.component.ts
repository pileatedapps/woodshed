import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAnchor, MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-sample',
  imports: [CommonModule, MatAnchor, MatButton, MatDivider, MatFabButton, MatIcon, MatIconButton, MatMiniFabButton, RouterLink],
  templateUrl: './button-sample.component.html',
  styleUrl: './button-sample.component.scss'
})
export class ButtonSampleComponent implements OnInit {
  title = 'Button Samples';
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.title = this.route.snapshot.title ? this.route.snapshot.title : 'Page Title';
  }


}
