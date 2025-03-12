function analyzeContent(text) {
  const sensationalKeywords = ['shocking', 'unbelievable', 'amazing'];
  const sensationalCount = sensationalKeywords.reduce((count, keyword) => {
    return count + (text.toLowerCase().includes(keyword) ? 1 : 0);
  }, 0);

  const excessivePunctuation = /[!?.]{3,}/.test(text);
  const allCaps = /\b[A-Z]{2,}\b/.test(text);

  return {
    sensationalKeywords: sensationalCount,
    excessivePunctuation,
    allCaps
  };
}

module.exports = analyzeContent; 