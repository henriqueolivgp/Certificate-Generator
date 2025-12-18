import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { BaseUi } from "./components/base-ui/base-ui";
import { CertificateService } from './services/certificate';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('certificate-generator');
  mostrarNavbar: boolean = false;

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificates')
    this.certificateService.certificates = certificates ? JSON.parse(certificates) : []
  }
}
