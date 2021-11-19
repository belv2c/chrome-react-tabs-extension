import { ChromeTabs, DOMMessage, DOMMessageResponse } from "../types";

export const getTabCount = (chromeTabs: ChromeTabs) => { 
  chrome.tabs && chrome.tabs.query({
    //active: true,
    currentWindow: true
  }, tabs => {
    // eslint-disable-next-line array-callback-return
    tabs.map((tab) => {
      chrome.tabs.sendMessage(
        tab.id || 0,
        { type: 'GET_DOM' } as DOMMessage,
        (response: DOMMessageResponse) => {
          chromeTabs.setTabCount(tabs.length > 0 ? tabs.length - 1 : 0);
        }
      )
    })
  });
}