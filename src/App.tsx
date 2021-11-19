import React from 'react';
import './App.css';
import { DOMMessage, DOMMessageResponse } from './types';

function App() {
  //const [title, setTitle] = React.useState('');
  //const [headlines, setHeadlines] = React.useState<string[]>([]);
  const [tabCount, setTabCount] = React.useState(0);

  React.useEffect(() => {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from React.
     * For sending messages from React we need to specify which tab to send it to.
     */
    chrome.tabs && chrome.tabs.query({
      //active: true,
      currentWindow: true
    }, tabs => {
      /**
       * Sends a single message to the content script(s) in the specified tab,
       * with an optional callback to run when a response is sent back.
       *
       * The runtime.onMessage event is fired in each content script running
       * in the specified tab for the current extension.
       */
      // eslint-disable-next-line array-callback-return
      tabs.map((tab) => {
        chrome.tabs.sendMessage(
          tab.id || 0,
          { type: 'GET_DOM' } as DOMMessage,
          (response: DOMMessageResponse) => {
            setTabCount(tabs.length > 0 ? tabs.length - 1 : 0);
            //console.log(tabCount)
          }
        )
      })
    });
  });

  return (
    <div className="App">
      <h1>Tab management extension built with React!</h1>
      <ul>
        <li>
          <div>
            <h2>{`You have ${tabCount} tabs open`}</h2>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;