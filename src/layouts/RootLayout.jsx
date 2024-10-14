import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const RootLayout = ({ children,headerText }) => {
  return (
    <div>
        <Navbar/>
        <h2>Welcome to {headerText} page</h2>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default RootLayout;