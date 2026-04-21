import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NeuralNetworkBackground from "./NeuralNetworkBackground";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      <NeuralNetworkBackground />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
