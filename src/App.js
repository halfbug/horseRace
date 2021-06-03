import AppRouter from './config/AppRouter'



function App() {

 

  return (
    <div className="view view-main">
      <div className="pages">
        <div data-page="about" className="page">
          <div className="page-content">
            
              <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
