// service_with_docs/src/__tests__/hello.test.ts
import { sayHello } from '../hello';

describe('sayHello', () => {
  it('should return a greeting message', () => {
    const result = sayHello('Mario');
    expect(result).toBe('Ciao, Mario! Benvenuto in Backstage!');
  });

  it('should handle empty name', () => {
    const result = sayHello('');
    expect(result).toBe('Ciao, ! Benvenuto in Backstage!');
  });
});
