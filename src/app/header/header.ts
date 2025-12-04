import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
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
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ];
}
