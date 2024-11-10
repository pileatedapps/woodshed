import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterOutlet } from '@angular/router';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-samples',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatList, MatListItem, RouterLink],
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss',
})
export class SamplesComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  links: { title: string, path: string}[] = [];
  title = 'Samples';

  ngOnInit(): void {
    this.title = this.route.snapshot.title!;
    this.route.snapshot.children.forEach((snapshot: ActivatedRouteSnapshot) => this.createContentItem(snapshot));
  }

  createContentItem(snapshot: ActivatedRouteSnapshot) {
    if (snapshot.title && (snapshot.routeConfig?.path && !snapshot.routeConfig.path.includes(':'))) {
      this.links.push({ title: snapshot.title, path: snapshot.routeConfig.path})
    }
  }
}
