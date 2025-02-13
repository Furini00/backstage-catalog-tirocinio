export function sayHello(name: string): string {
  return `Ciao, ${name}! Benvenuto in Backstage!`;
}

const greeting = sayHello("Mario");
console.log(greeting);
