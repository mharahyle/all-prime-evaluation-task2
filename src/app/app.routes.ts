import { Routes } from '@angular/router';
import { HelpComponent } from './pages/help/help.component';
import { AllDeviceComponent } from './pages/all-device/all-device.component';
import { DeviceComponent } from './pages/device/device.component';

export const routes: Routes = [ 
    { path: '', redirectTo: 'devices', pathMatch: 'full' },
    { path: 'devices', component: AllDeviceComponent },
    { path: 'device/:id', component: DeviceComponent },
    { path: 'help', component: HelpComponent },
    { path: '**', redirectTo: '/devices' },
];
