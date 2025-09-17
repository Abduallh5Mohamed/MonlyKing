import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavigationItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-navigation-pills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-pills.component.html',
  styleUrl: './navigation-pills.component.css'
})
export class NavigationPillsComponent {
  navigationItems: NavigationItem[] = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'Prompt and best practices for AI', link: 'https://angular.dev/ai/develop-with-ai'},
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ];
}