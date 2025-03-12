// Content script for analyzing webpage content

// Function to analyze content
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

// Example usage
const pageContent = document.body.innerText;
const analysisResult = analyzeContent(pageContent);
console.log('Content Analysis Result:', analysisResult);

function extractDomain(url) {
  const urlObj = new URL(url);
  const domain = urlObj.hostname.replace('www.', '');
  return domain;
}

module.exports = extractDomain; 