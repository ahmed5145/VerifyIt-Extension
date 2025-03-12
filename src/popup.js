document.addEventListener('DOMContentLoaded', async function() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const domain = new URL(tab.url).hostname;

    // Fetch domain reputation
    const domainData = await chrome.runtime.sendMessage({ action: 'fetchDomainReputation', domain });
    const domainScore = domainData ? domainData.reputation : 'N/A';

    // Analyze content
    const contentData = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: analyzeContent,
        args: [document.body.innerText]
    });
    const contentScore = contentData[0].result.sensationalKeywords;

    // Update the UI with fetched data
    document.getElementById('domain-score').textContent = `Domain Score: ${domainScore}`;
    document.getElementById('content-score').textContent = `Content Score: ${contentScore}`;
}); 