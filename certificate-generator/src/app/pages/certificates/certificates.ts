import { Component, OnInit } from '@angular/core';
import { CertiedItem } from '../../components/certied-item/certied-item';
import { TitleSubtitle } from '../../components/title-subtitle/title-subtitle';
import { PagesBase } from '../../components/pages-base/pages-base';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { Certificate } from '../../interface/certificate';
import { CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-certificates',
  imports: [TitleSubtitle, PagesBase, SecondaryButton, RouterLink, CertiedItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})

export class Certificates implements OnInit {

  certificates: Certificate[] = [];
  
  constructor(private certificateService: CertificateService) {}
  
  ngOnInit(): void {
    this.certificates = this.certificateService.certificates.reverse();
  }
}
