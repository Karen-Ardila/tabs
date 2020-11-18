import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs'

function App() {
  return (
    <div className="App">
      <Tabs tabs={[{label: 'Tab 1', content: 'Tab1 content'},
        {label: 'Tab 2', content: 'Tab 2 content'},
        {label: 'Tab 3', content: 'Tab 3 content'}
    ]}/>

    </div>
  );
}

export default App;
