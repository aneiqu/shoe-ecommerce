import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Re-usable/Footer";

function App() {
  return (
    <div className='w-screen min-h-screen relative'>
      <div className='pb-16'>
        <Navbar />
        {/* Content */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
