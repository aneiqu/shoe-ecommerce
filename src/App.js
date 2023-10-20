import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Re-usable/Footer";
import StoreContent from "./Components/StoreContent/StoreContent";

function App() {
  return (
    <div className='w-screen min-h-screen relative'>
      <div className='pb-16'>
        <Navbar />
        <div className='w-screen flex justify-center'>
          <StoreContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
