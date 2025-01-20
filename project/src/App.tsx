import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-950 via-purple-900 to-blue-950 text-white">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}