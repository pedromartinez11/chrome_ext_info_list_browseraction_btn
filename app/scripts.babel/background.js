'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo 12'});

console.log('\'Allo \'Allo! Event Page for Browser Action. Hello world');
