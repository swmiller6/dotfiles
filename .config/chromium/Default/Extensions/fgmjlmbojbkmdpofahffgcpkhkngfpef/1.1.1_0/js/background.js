const EXT_LABEL = 'ext-chrome';
const INSTALL_PARAMS = {
  source: 'organic',
  campaign: 'none',
  date: '2000-01-01',
  live: false,
};
const UNINSTALL_URL_BASE = 'https://add.startpage.com/uninstall/';

// NOTE: load params into global var for use in webrequest listener
let currentParams;
chrome.storage.onChanged.addListener((c, n) => {
  if (n !== 'local') return;
  for (const k of Object.keys(c)) {
    currentParams[k] = c[k].newValue;
  }
  updateUninstallUrl();
});
chrome.storage.local.get(INSTALL_PARAMS, data => currentParams = data);

chrome.runtime.onInstalled.addListener(e => launchSuccess(e.reason));

chrome.webRequest.onBeforeSendHeaders.addListener(
  augmentSearch,
  {
    urls: [
      'https://*.startpage.com/*',
    ],
  },
  ['blocking', 'requestHeaders']
);

chrome.browserAction.onClicked.addListener(
  () => chrome.tabs.create({url: 'https://www.startpage.com/'})
);

chrome.runtime.onMessage.addListener(msg => {
  if (msg.event !== 'spcontentpl' || currentParams.live) return;
  const args = Object.keys(INSTALL_PARAMS).reduce(
    (a, p) => (a[p] = msg[p], a), {}
  );
  if (Object.values(args).every(a => a)) {
    chrome.storage.local.set(args);
  }
});

function launchSuccess(reason) {
  if (reason !== 'install') return;

  chrome.storage.local.get(
    INSTALL_PARAMS,
    data => {
      updateUninstallUrl();
      chrome.tabs.create({url: 'https://add.startpage.com/success/'});
    }
  );
}

function augmentSearch(e) {
  const extensionHeaders = [
    {name: 'Startpage-Extension', value: EXT_LABEL},
  ];
  if (e.url.includes(`&pl=${EXT_LABEL}&`)) {
    extensionHeaders.push(
      {name: 'Startpage-Extension-Campaign', value: currentParams['campaign']}
    );
    extensionHeaders.push(
      {name: 'Startpage-Extension-Date', value: currentParams['date']}
    );
    extensionHeaders.push(
      {name: 'Startpage-Extension-Source', value: currentParams['source']}
    );
  }
  const newHeaders = e.requestHeaders.concat(extensionHeaders);
  return {requestHeaders: newHeaders};
}

function updateUninstallUrl() {
  const u = buildUrl(UNINSTALL_URL_BASE, currentParams)
  chrome.runtime.setUninstallURL(u);
}

function buildUrl(base, data) {
  const u = new URL(base);
  u.searchParams.set('campaign', data.campaign);
  u.searchParams.set('date', data.date);
  u.searchParams.set('source', data.source);
  u.searchParams.set('extVersion', chrome.runtime.getManifest().version)
  return u.toString();
}

// TODO: handle localization of urls later
function getLangCode() {
  return chrome.i18n.getUILanguage().split('-')[0] || 'en';
}
