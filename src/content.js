function extractDomain(url) {
  const urlObj = new URL(url);
  const domain = urlObj.hostname.replace('www.', '');
  return domain;
}

module.exports = extractDomain; 