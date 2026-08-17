import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4']);


import HeroBanner from "@/componenets/HeroBannder";
import WhyChooseUs from "@/componenets/WhyChoosUs";
import Image from "next/image";
import FeatureRooms from "@/componenets/FeatureRooms";

export default function Home() {
  return (
    <div >
      <HeroBanner></HeroBanner>
      <FeatureRooms></FeatureRooms>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
