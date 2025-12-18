import { Component, Input } from '@angular/core';
import { SecondaryButton } from '../secondary-button/secondary-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certied-item',
  imports: [SecondaryButton],
  templateUrl: './certied-item.html',
  styleUrl: './certied-item.css',
})
export class CertiedItem {

  @Input() studentName: string = ''
  @Input() emitDate: string = ''
  @Input() id: string = ''

  constructor(private router: Router) {}

  navigateToCertificate() {
    // the difference between navigate and navigateByUrl is that navigate uses the routerLink or click event and navigateByUrl uses the url with the event click
    // navigate is used to navigate to a specific route
    this.router.navigate(['/certificates', this.id]);
    // navigateByUrl is used to navigate to a specific url
    // this.router.navigateByUrl('/certificates/' + this.certificatesId) or this.router.navigateByUrl(`/certificates/${this.certificatesId}`);
  }
}
