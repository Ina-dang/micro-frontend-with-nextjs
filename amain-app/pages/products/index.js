import dynamic from "next/dynamic";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductsList = dynamic(() => import("ashop_app/Products"), {
  loading: () => <p>LOading...</p>,
  ssr: false,
});

export default function index() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar />
      <ProductsList />
      <Footer />
    </main>
  );
}
