import Image from "next/image"
import Navbar from "@/components/Navbar"
export default function ServicePage (){
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
              Our Services
            </h1>
            <p className="mx-auto text-lg md:text-xl text-gray-200 max-w-3xl text-center mt-5">
              Comprehensive engineering services to ensure your machinery
              operates at peak performance.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Complete Machine Lifecycle Support
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Amesoade, we provide comprehensive services that cover the
                  entire lifecycle of your industrial machinery – from initial
                  consultation and design to installation, maintenance, and
                  eventual upgrades.
                </p>
                <p className="text-lg text-gray-600">
                  Our team of experienced engineers and technicians ensures that
                  your equipment operates at peak efficiency, minimizing
                  downtime and maximizing productivity.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/prince.jpg"
                  alt="Prince-Machine"
                  className="object-cover w-full"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}