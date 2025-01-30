import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import { AssetLoaderService } from '../services/asset-loader.service';
import { ASSETS } from '../constants/assets';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage], // Import RouterModule for `routerLink`
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo: string = ASSETS.logo;



}
