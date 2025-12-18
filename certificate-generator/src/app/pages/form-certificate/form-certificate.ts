import { Component, ViewChild, viewChild } from '@angular/core';
import { PagesBase } from '../../components/pages-base/pages-base';
import { TitleSubtitle } from '../../components/title-subtitle/title-subtitle';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from '../../components/primary-button/primary-button';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ErrorMessage } from '../../components/error-message/error-message';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interface/certificate';
import { CertificateService } from '../../services/certificate';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-certificate',
  imports: [
    PagesBase,
    TitleSubtitle,
    SecondaryButton,
    PrimaryButton,
    FormsModule,
    ErrorMessage,
    CommonModule,
  ],
  templateUrl: './form-certificate.html',
  styleUrl: './form-certificate.css',
})
export class FormCertificate {
  constructor(private certificateService: CertificateService, private route: Router) {}

  @ViewChild('form') form!: NgForm;

  activity: string = '';
  certificate: Certificate = {
    id: '',
    name: '',
    emitDate: '',
    activities: [],
  };

  InvalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  ValidForm() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    if (this.activity.length == 0) {
      return;
    }
    this.certificate.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    // remove activity from activities array
    // the splice method remove the element from the array
    this.certificate.activities.splice(index, 1);
  }

  submitForm() {
    if (!this.ValidForm()) {
      return;
    }
    this.certificate.emitDate = this.actualDate();
    this.certificate.id = uuidv4();
    this.certificateService.addCertificate(this.certificate);

    this.route.navigate(['/certificates', this.certificate.id]);
  }

  actualDate() {
    const actualDate = new Date();
    const day = String(actualDate.getDate()).padStart(2, '0');
    // the getMonth() initial value is 0 so we need to add 1
    const month = String(actualDate.getMonth() + 1).padStart(2, '0');
    const year = actualDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  actualCertificateState(): Certificate {
    return {
      id: '',
      name: '',
      emitDate: '',
      activities: [],
    };
  }
}
