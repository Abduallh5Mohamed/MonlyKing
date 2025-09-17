import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
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