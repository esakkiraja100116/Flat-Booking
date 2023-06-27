import './globals.css';
import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about/index';

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Home/>
        <About/>
      </body> 
    </html>
  )
}
