import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

declare const AOS: any;

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration()
  ]
};

// Initialize AOS with better configuration for SPAs
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    AOS.init({
      // Global settings
      duration: 800,
      easing: 'ease-out-cubic',
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
    });
  });

  // Refresh AOS on route changes and dynamic content loads
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        AOS.refresh();
      }
    });
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
