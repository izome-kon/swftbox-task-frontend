import { ToastContainer } from 'react-toastify';
import './App.css';
import { Clouds } from './components';
import { HomeScreen } from './pages/HomeScreen/HomeScreen'

function App() {
  return (
    <>
      <Clouds />
      <HomeScreen />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
