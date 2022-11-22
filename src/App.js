import './index.css';
import Header from './components/Header'
import NewsCard from './components/NewsCard';


function App() {
  return (
    <> 
    <Header />
    <div className="headline-section">
        <h2>Hello, world!</h2>
    </div>
    <NewsCard />
    </>
  );
}

export default App;
