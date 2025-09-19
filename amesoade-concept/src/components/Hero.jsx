"use client";

import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../assets/hero-img.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={HeroImage} alt="Hero Image" fill className="object-cover " />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Engineering Excellence in Industrial Machinery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Amesoade provides cutting-edge solutions for lathe machines, prince
            machines, rubber-making machines, and other industrial equipments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-bold text-white shadow-sm "
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
