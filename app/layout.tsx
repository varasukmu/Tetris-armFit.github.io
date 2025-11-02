import './globals.css';
import Navbar from '@/component/NavBar'; 

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className='w-11/12 mx-auto'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}