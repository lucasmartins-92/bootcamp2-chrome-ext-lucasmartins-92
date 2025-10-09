const RICKROLL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url === RICKROLL) {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon.png',
            title: 'Rickroll!',
            message: 'Segura o Rickroll!',
        });
    }
});