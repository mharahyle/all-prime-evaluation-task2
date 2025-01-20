import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

interface BluetoothDevice {
  id: string;
  name: string;
  status: string;
  type: string;
}

@Component({
  selector: 'app-all-device',
  standalone:true,
  imports: [ 
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule],
  templateUrl: './all-device.component.html',
  styleUrl: './all-device.component.scss'
})

export class AllDeviceComponent {
  isConnectable = true;
  devices: BluetoothDevice[] = [
    {
      id: 'BT0119191898',
      name: 'BT0119191898',
      status: 'Connectable',
      type: 'Bluetooth'
    }
  ];

  constructor(private router: Router) {}

  navigateToDetail(deviceId: string) {
    this.router.navigate(['/device', deviceId]);
  }

  addDevice(): void {
    // Implement add device logic
  }

  toggleNotifications(): void {
    // Implement notifications logic
  }

  shareDevice(): void {
    // Implement share logic
  }

  openSettings(): void {
    // Implement settings logic
  }
}
