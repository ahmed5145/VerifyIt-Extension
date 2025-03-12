require('dotenv').config();

async function fetchDomainReputation(domain) {
  const apiKey = process.env.VIRUSTOTAL_API_KEY;
  const apiUrl = `https://www.virustotal.com/api/v3/domains/${domain}`;
  const headers = {
    'x-apikey': apiKey
  };

  try {
    const response = await fetch(apiUrl, { headers });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch domain reputation:', error);
    return null;
  }
}

// Example usage
fetchDomainReputation('example.com').then(data => {
  if (data) {
    console.log('Domain reputation data:', data);
  } else {
    console.log('Failed to retrieve domain reputation data.');
  }
}); 