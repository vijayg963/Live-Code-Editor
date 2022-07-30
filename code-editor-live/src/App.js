import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    let editor = new EditorView({
      extensions: [basicSetup, javascript()],
      parent: document.getElementById('code'),
    });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div id='code'></div>
      </div>
    );
  }
}

export default App;
