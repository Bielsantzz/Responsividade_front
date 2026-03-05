import Header from "./Header";
import Banner from "./Banner";
import Features from "./Features";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="container">
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
}