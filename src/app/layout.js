import './globals.css';
import { Navbar } from './navbar';
import { Home } from './home';
import { Test } from './test';

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Home/>
        {/* <Test/> */}
      </body> 
    </html>
  )
}
