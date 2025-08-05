import "./App.css";
import { Header } from "./components/widgets/Header";
import { MainContent } from "./components/widgets/MainContent";
import { ProductSection } from "./components/widgets/ProductSection";
import { Faq } from "./components/widgets/FAQ";
import { Footer } from "./components/widgets/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
