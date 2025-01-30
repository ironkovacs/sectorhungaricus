import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetLoaderService {
  // Centralized asset mapping
  private assets = {
    logo: 'assets/images/logo.png',
    fonts: {
      BoucherieBlock: 'assets/fonts/Boucherie Block.otf',
      BoucherieBlockBold: 'assets/fonts/Boucherie Block Bold.otf',
    },
  };

  // Retrieve the full path for any asset by key
  get(path: string): string | undefined {
    // Resolves dotted string paths (e.g., "fonts.BoucherieBlock")
    return path.split('.').reduce((prev: any, key: string) => prev?.[key], this.assets);
  }
}
