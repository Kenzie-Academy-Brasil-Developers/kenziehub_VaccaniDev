import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import { KenzieProvider } from './providers/Context.jsx';

import "./styles/index.scss"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <KenzieProvider>
        <RoutesMain />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </KenzieProvider>
    </>
  )
}

export default App
