import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../../components/social-links/social-links.component';
import { NavigationPillsComponent } from '../../components/navigation-pills/navigation-pills.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent, NavigationPillsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  ngAfterViewInit() {
    const video = document.querySelector('.background-video') as HTMLVideoElement;
    if (video) {
      video.load();
      video.addEventListener('canplay', () => {
        video.setAttribute('data-loaded', 'true');
        video.play().catch(e => console.log('Video autoplay failed:', e));
      });
    }
  }

}