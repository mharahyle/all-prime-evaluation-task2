import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help',
  standalone:true,
  imports: [CommonModule,
      MatToolbarModule,MatIconModule,MatListModule,MatDividerModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {
  helpItems = [
    { id: 1, icon: 'smartphone', text: 'App usage problem', color: '#74b2ff' },
    { id: 2, icon: 'settings', text: 'Features', color: '#54d0f6' },
    { id: 3, icon: 'build', text: 'Lock installation', color: '#9da8de' },
    { id: 4, icon: 'error_outline', text: 'Normal trouble shooting', color: '#ffb42a' }
  ];
 constructor(private router: Router,private location: Location) {}
  goBack() {
        // First try to use Location service for browser history
        if (window.history.length > 1) {
          this.location.back();
        } else {
          // If no history exists, navigate to a default route (e.g., home)
          this.router.navigate(['/']);
        }
  }

  

}
