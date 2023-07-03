import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';


import './styles/components/app.sass';


function App() {
  
  return (
      <div id="portifolio">
        <h1>Wander Matheus</h1>

        <Sidebar />
        <MainContent />
    </div>
  );
}

export default App
