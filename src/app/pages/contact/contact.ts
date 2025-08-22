import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado: ', this.contactForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contactForm.reset();
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
