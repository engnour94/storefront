
import ButtonAppBar from "./components/header";
import Footer from './components/footer';
import Categories from './components/categories.jsx';
import Products from './components/products.jsx';

function App() {
  return (
    <>
      <ButtonAppBar />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
