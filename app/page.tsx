import type { Metadata } from "next";
import { Navbar } from '../components/Navbar';

export const metadata: Metadata = {
  title: 'ecommerce',
  description: 'Contacto del sitio web',
};

export default function HomePage(){
  return(
    <>
    <Navbar/>
    <main className="flex flex-col items-center p-24">
        <span className="text-5xl">
          BIENVENIDO !! 
        </span>
    </main>
    </>
  )
}