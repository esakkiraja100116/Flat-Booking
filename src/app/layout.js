import './globals.css';
import { Template } from './template';
import { About } from './home';

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Template/>
        <About/>
      </body> 
    </html>
  )
}
