import 'bootstrap/dist/css/bootstrap.min.css';

import PizzaList from './components/PizzaList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <PizzaList />

      <Footer
        id="SE20A07"
        name="Nguyen Dang Khang Huy"
        email="vietnamnhungchuyendi@gmail.com"
        githubLink="https://github.com/vietnamnhungchuyendi-collab/FER202_FU26_HUYNDK"
      />
    </div>
  );
}

export default App;