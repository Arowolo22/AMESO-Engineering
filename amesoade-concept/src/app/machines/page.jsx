"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (videoSrc, title) => {
    setSelectedVideo({ src: videoSrc, title });
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-26 lg:py-36 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center ">
            Our Machines
          </h1>
          <p className="mx-auto text-lg md:text-xl text-gray-200 max-w-3xl text-center mt-5">
            Discover our range of high-quality industrial machines designed for
            precision, reliability, and performance.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Machines
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Machine 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/prince.jpg"
                alt="Prince Machine"
                width={400}
                height={250}
                className="object-cover w-full h-48 mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-gray-900 ">
                Prince Machine
              </h2>
              <p className="text-gray-900 mt-2">
                Accurately cuts crank shafts, ensuring smooth finishes and exact
                dimensions.
              </p>
              <h4 className="font-semibold text-gray-900 mt-4">
                Key Features:
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li className="mt-3">Precision crankshaft grinding</li>
                <li className="mt-3">High accuracy cutting</li>
                <li className="mt-3">Automatic feed system</li>
                <li className="mt-3">Durable grinding wheel</li>
              </ul>
              <button
                onClick={() =>
                  openVideoModal("/prince-machine.mp4", "Prince Machine Demo")
                }
                className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch a Video
              </button>
            </div>

            {/* Machine 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/rubber.jpg"
                alt="Rubber Machine"
                width={400}
                height={250}
                className="object-cover w-full h-48 mb-4 rounded"
              />
              <h2 className="text-xl font-semibold text-gray-900 ">
                Net Rubber Machine
              </h2>
              <p className="text-gray-900 mt-2">
                Produces durable aluminium nets for windows, offering safety,
                ventilation, and insect protection.
              </p>
              <h4 className="font-semibold text-gray-900 mt-4">
                Key Features:
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li className="mt-3">High-temperature resistance</li>
                <li className="mt-3">Adjustable mesh size</li>
                <li className="mt-3">Strong cooling system</li>
                <li className="mt-3">Mold shaping system</li>
              </ul>
              <button
                onClick={() =>
                  openVideoModal(
                    "/net-rubber-machine.mp4",
                    "Net Rubber Machine Demo"
                  )
                }
                className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch a Video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl  text-center">
          <h1 className="font-bold text-3xl">
            Need a Custom Machine Solution?
          </h1>
          <p className="text-gray-200 mx-auto text-lg md:text-xl max-w-3xl mt-4">
            Our engineering team can design and build custom machinery to meet
            your specific requirements.
          </p>
          <Link
            href="/#contact"
            className="inline-flex px-4 py-3 rounded-md bg-white mt-5 text-black mx-auto "
          >
            Discus Your Project
          </Link>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeVideoModal}
        videoSrc={selectedVideo?.src}
        title={selectedVideo?.title}
      />
      <Footer/>
    </div>
  );
}
