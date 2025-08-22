import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatDivider, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  team = [
    { nome: 'Pedro Damasceno', funcao: 'Desenvolvedor Frontend', avatar: '👨‍💻' },
    { nome: 'Maria Santos', funcao: 'Designer UX/UI', avatar: '👩‍🎨' },
    { nome: 'João Silva', funcao: 'Desenvolvedor Backennd', avatar: '👨‍🔧' },
  ];

  features = [
    'Design moderno e responsivo',
    'Performance otimizada',
    'Navegação intuitiva',
    'Tecnologias atualizadas',
  ];
}
