const extractDomain = require('../src/content');

describe('Domain Extraction', () => {
  test('should extract domain from URL', () => {
    const url = 'https://www.example.com/page';
    const expectedDomain = 'example.com';
    expect(extractDomain(url)).toBe(expectedDomain);
  });
}); 