import { Routes } from '@angular/router';
import { Certificates } from './pages/certificates/certificates';
import { FormCertificate } from './pages/form-certificate/form-certificate';
import { ViewCertificate } from './pages/certificate/certificate';
export const routes: Routes = [
  {
    path: '',
    component: Certificates,
  },
  {
    path: 'certificates/new',
    component: FormCertificate,
  },
  {
    path: 'certificates/:id',
    component: ViewCertificate,
  },
];
