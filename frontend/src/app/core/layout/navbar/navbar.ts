import { Component, input, output } from '@angular/core';
import { companyInfo } from '../../../../assets/config/brand';
import { NAVBAR_MENU } from '../../navigation.constants';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  name = companyInfo.companyName
  logo_url = companyInfo.companyLogo
  links = NAVBAR_MENU
}
