import Image from "next/image";
import Navbar from "@/components/Navbar";
// import About from "../../assets/about-img.jpg";
export default function AboutPage(){
    return (
      <div>
        <Navbar />
        <section className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/about-img.jpg"
              alt="About-Image"
              fill
              className="object-cover h-full"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
              Our Service
            </h1>
            <p className="mx-auto text-lg md:text-xl text-gray-200 max-w-3xl text-center mt-5">
              Engineering excellence and innovation since 2015. Learn about our
              journey, our mission, and our commitment to quality.
            </p>
          </div>
        </section>
      </div>
    );
}