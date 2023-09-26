import Output from '../Output';
import Entry from '../Entry';
import History from '../History';
import './Layout.css';
import React, { useState } from 'react';

function Layout() {

  let [output, setOutput] = useState('');
  let [history, setHistory] = useState('');

  const handlerOuput = (text) => {

    setOutput(text);
  }

  const handlerHistory = (text) => {

    // @ts-ignore
    setHistory(history = '<br />'+ text);
    document.cookie = history;
  }

  return (
    <div className="layout">
      <div className="colmFlex">
        <Output transferToOutput={output} />
        <Entry transferToOutput={handlerOuput} transferToHistory={handlerHistory} />
      </div>
      <div className="colmFlex">
        <History transferToHistory={history}/>
      </div>
    </div >
  );
}

export default Layout;
