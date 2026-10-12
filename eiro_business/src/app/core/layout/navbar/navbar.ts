import { Component } from '@angular/core';
import { NAVIGATION_LINKS } from '../../../config/navigation.config';
import {BRANDING} from '../../../config/branding.config'
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink,RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  links = NAVIGATION_LINKS
  brand = BRANDING
}
