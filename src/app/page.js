'use client'
import Banner from "@/component/user/HomePage/Banner";
import HomeNavbar from "@/component/user/HomePage/HomeNavbar";
import CardVideoSection from "@/component/user/HomePage/CardVideoSection";
import Footer from "@/component/user/HomePage/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">

    <HomeNavbar/>
    <Banner/>
    <CardVideoSection/>
    <Footer/>

    </main>
  );
}
