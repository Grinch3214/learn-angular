import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  id: number | string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() title!: string;

  list: NavItem[] = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Movies', url: '/movies' },
  ];
}
