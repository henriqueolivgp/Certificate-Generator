import { Injectable } from '@angular/core';
import { Certificate } from '../interface/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: Certificate[] = [];

  constructor() {}

  addCertificate(certificate: Certificate) {

    // In here we add the certificate to the array and then we save it in the localStorage
    // The unshift method add the element to the beginning of the array
    this.certificates.unshift({...certificate});
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }
}
