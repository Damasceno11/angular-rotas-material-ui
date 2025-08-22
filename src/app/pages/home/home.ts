import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  features = [
    { icon: '🚀', title: 'Rápido', description: 'Performance otimizada' },
    { icon: '🎨', title: 'Moderno', description: 'Design contemporâneo' },
    { icon: '📱', title: 'Responsivo', description: 'Adaptável a todos os dispositivos' },
  ];

  scrollToFeatures(): void {
    console.log('Botão clicado! - Iniciando scroll');

    try {
      const element = document.getElementById('featuresSection');
      console.log('Elemento encontrado:', element);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        console.log('Scroll executado com sucesso!');
      } else {
        console.error('❌ Elemento featuresSection não encontrado!');
        this.fallbackScroll();
      }
    } catch (error) {
      console.error('❌ Erro no scroll:', error);
      this.fallbackScroll();
    }
  }

  private fallbackScroll(): void {
    const element = document.getElementById('featuresSection');
    if (element) {
      element.scrollIntoView();
      console.log('Scroll de fallback executado');
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const element = document.getElementById('featuresSection');
      console.log('Elemento após renderização:', element);
    }, 1000);
  }
}
