import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage(){
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
              Discover our range of high-quality industrial machines designed
              for precision, reliability, and performance.
            </p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              All Machines
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                  Accurately cuts crank shafts, ensuring smooth finishes and
                  exact dimensions.
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
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}