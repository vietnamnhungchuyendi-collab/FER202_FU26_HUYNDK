import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import PizzaList from './components/PizzaList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <MyNavbar />

      <MyCarousel />

      <PizzaList />

      <Footer
        id="SE20A07"
        name="Nguyen Dang Khang Huy"
        email="vietnamnhungchuyendi@gmail.com"
        githubLink="https://github.com/"
      />
    </div>
  );
}

export default App;