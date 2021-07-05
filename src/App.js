
import ButtonAppBar from "./components/header";
import Footer from './components/footer';
import Categories from './components/categories.jsx';
import Products from './components/products.jsx';
// import SimpleCart from './components/cart'
function App() {
  return (
    <>
      <ButtonAppBar />
      <main>
        <Categories />
        <Products />
        {/* <SimpleCart /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
