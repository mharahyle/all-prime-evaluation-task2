import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

interface BluetoothDevice {
  id: string;
  name: string;
  status: string;
  type: string;
}

@Component({
  selector: 'app-device',
  standalone:true,
  imports: [ CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent {
  device: BluetoothDevice | undefined;
  deviceId = 'BT01191918898';
  batteryLevel = 88;
  lastUpdated = new Date('2020-08-07T14:55:00');
  isConnectable = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {    
     const id = this.route.snapshot.paramMap.get('id');
    // In a real app, you would fetch the device details from a service
    this.device = {
      id: id || 'BT0119191898',
      name: 'BT0119191898',
      status: 'Connectable',
      type: 'bluetooth'
    };
  }

  toggleAwayMode(): void {
    // Implement away mode toggle logic
  }

  openActivities(): void {
    // Implement activities dialog
  }

  openShareDialog(): void {
    // Implement share dialog
  }

  openSettings(): void {
    // Implement settings dialog
  }
  goBack(): void {
    // First try to use Location service for browser history
    if (window.history.length > 1) {
      this.location.back();
    } else {
      // If no history exists, navigate to a default route (e.g., home)
      this.router.navigate(['/']);
    }
  }
  navigateToHelp() {
    this.router.navigate(['/help']);
  }
}
