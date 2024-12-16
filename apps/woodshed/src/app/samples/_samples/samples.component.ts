import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-samples',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss'
})
export class SamplesComponent implements OnInit {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  links: { title: string, path: string }[] = [];
  title = 'Samples';

  ngOnInit(): void {
    this.title = this.route.snapshot.title ? this.route.snapshot.title : 'Page Title';
    this.route.snapshot.children.forEach((snapshot: ActivatedRouteSnapshot) => this.createContentItem(snapshot));
  }

  private createContentItem(snapshot: ActivatedRouteSnapshot) {
    if (snapshot.title && (snapshot.routeConfig?.path && !snapshot.routeConfig.path.includes(':'))) {
      this.links.push({ title: snapshot.title, path: snapshot.routeConfig.path });
    }
  }
}
