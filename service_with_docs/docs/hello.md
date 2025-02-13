# Documentazione del Servizio

Questo è un servizio di esempio per dimostrare l'integrazione con Backstage.

## Funzionalità

### Funzione `sayHello`

La funzione `sayHello` restituisce un saluto personalizzato.

#### Utilizzo

```typescript
import { sayHello } from '../src/hello';

const greeting = sayHello("Mario");
console.log(greeting); // Output: "Ciao, Mario! Benvenuto in Backstage!"
