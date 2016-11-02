## Client models

### Popis

Obsahuje modely pro klienta

### Příprava modulu
- Udělejte si `git clone` této repozitory
- Ujistěte se, že máte nainstalován [node.js](https://nodejs.org/)
- Spusťte `npm install -g typings typescript` pro instalaci globálních závislostí
- Spusťte `npm install -g karma-cli protractor` pro instalaci globálních testovacích závislostí
- Přidejte si do souboru `.npmrc` v modulu řádku `registry=https://kb-fast1.f-app.it/nexus/repository/npm-fast-group/`
- Přidejte si do souboru `.npmrc` v modulu svůj authToken (lze ho získat pomocí `npm login`, který vám ho po přihlášení vrátí do `.npmrc` ve vašem home adresáři a vy si ho přesunete do `.npmrc` v modulu)
- Spusťte `npm install` pro instalaci závislostí pro běh aplikace

### Použití
- Nainstalujte si modul do projektu (to můžete udělat jednou ze dvou následujících možností)
    - přidejte si jeho jméno do `dependencies` do `package.json` ve vašem projektu a dejte `npm install` (pokud zatím není publikován, publikuje module pomoci `npm --access public publish`)
    - nebo si udělejte link pomocí `npm link`, jděte do rootu vašeho projektu a zavolejte `npm link cesta-k-modulu`
- Použijte modely dle libosti

```js
import { Component } from '@angular/core';

import { Client } from 'ng2-f-client-models';

@Component({
  selector: 'my-component',
  template: `
    {{client.name}}
  `
})
export class MyComponent {

  client:Client = new Client(null, 'joe', '', '');

}
```

### Tasky
- `npm test` - spuštění testů a coverage analýzy

### Tasky (validace)
- `gulp sonar` pro spuštění analýzy souborů na chyby

### Tasky (release)
- `npm version [patch|minor|major]` - pro zvednutí verze modulu
- `npm --access public publish` - pro nahrání na npm repository
