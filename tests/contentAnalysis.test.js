const analyzeContent = require('../src/contentAnalysis');

describe('Content Analysis', () => {
  test('should detect sensational keywords', () => {
    const text = 'This is a shocking and unbelievable event!';
    const result = analyzeContent(text);
    expect(result.sensationalKeywords).toBeGreaterThan(0);
  });

  test('should detect excessive punctuation', () => {
    const text = 'Wow!!! This is amazing!!!';
    const result = analyzeContent(text);
    expect(result.excessivePunctuation).toBe(true);
  });

  test('should detect all-caps phrases', () => {
    const text = 'THIS IS IMPORTANT!';
    const result = analyzeContent(text);
    expect(result.allCaps).toBe(true);
  });
}); 