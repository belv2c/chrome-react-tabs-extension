import React from 'react';
import './App.css';
import { getTabCount } from './chromeServices/tabEvaluator';

function App() {
  //const [title, setTitle] = React.useState('');
  //const [headlines, setHeadlines] = React.useState<string[]>([]);
  const [tabCount, setTabCount] = React.useState(0);

  React.useEffect(() => {
 
    getTabCount({ setTabCount });
    console.log("tabCOount", tabCount);
  }, [tabCount]);
  
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