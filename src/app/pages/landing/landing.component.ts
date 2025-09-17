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
      // Check if video file exists
      video.addEventListener('loadstart', () => {
        console.log('Video loading started');
      });
      
      video.addEventListener('canplaythrough', () => {
        console.log('Video can play through');
        video.setAttribute('data-loaded', 'true');
        video.play().catch(e => {
          console.log('Video autoplay failed:', e);
          // Fallback to static background
          video.style.display = 'none';
        });
      });
      
      video.addEventListener('error', (e) => {
        console.log('Video loading error:', e);
        // Hide video element if it fails to load
        video.style.display = 'none';
      });
      
      // Load the video
      video.load();
    }
  }
}