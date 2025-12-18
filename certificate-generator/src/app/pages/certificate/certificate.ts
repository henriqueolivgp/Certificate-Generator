import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificateService } from '../../services/certificate';
import { Certificate } from '../../interface/certificate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css',
})
export class ViewCertificate implements OnInit{

  id: string | null = null
  certificate: Certificate | undefined

  @ViewChild('containerCertificate') ElementCertificate!: ElementRef;

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificate = this.certificateService.certificates.find(item => item.id == this.id)
    })
  }

  downloadCertificate() {
    if (this.certificate == undefined) {
      return;
    }
    html2canvas(this.ElementCertificate.nativeElement, {scale: 2}).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate_' + this.certificate?.name.replaceAll(' ', '_') + '.png';
        link.click();
      }
    )
  }
}

