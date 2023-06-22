import './globals.css';
import { Navbar } from './navbar';
import { Home } from './home';

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Home/>
      </body> 
    </html>
  )
}
