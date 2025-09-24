import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer"
import Image from "next/image";
import Link from "next/link";
import Lathe from "../../assets/lathe.jpg";
import Home from "../../assets/home.jpg"
import { CheckCircleIcon, CogIcon, WrenchIcon, HammerIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-900">
              Our Featured Machines
            </h3>
            <p className="text-gray-600 mx-auto text-lg max-w-3xl mt-4">
              Discover our range of high-quality industrial machines designed
              for precision, reliability, and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* PRODUCT 1 */}

            <div className="bg-gray-50 rounded-xl shadow-md hover:-translate-y-1">
              <Image
                src={Lathe}
                alt="lathe-machine"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Lathe Machine
                </h3>
                <p className="text-gray-600 pt-4">
                  High-precision lathe machines designed for superior metal
                  cutting and shaping operations.
                </p>
                <Link
                  href="/products"
                  className="text-blue-900 mt-4 inline-flex items-center font-medium"
                >
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* PRODUCT 2 */}

            <div className="bg-gray-50 rounded-xl shadow-md hover:-translate-y-1">
              <Image
                src="/prince.jpg"
                alt="prince-machine"
                className="w-full h-64 object-cover rounded-lg"
                width={200}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Prince Machine
                </h3>
                <p className="text-gray-600 pt-4">
                  Accurately cuts shafts, ensuring smooth finishes and exact
                  dimensions.
                </p>
                <Link
                  href="/products"
                  className="text-blue-700 mt-4 inline-flex items-center font-medium"
                >
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* PRODUCT 3 */}

            <div className="bg-gray-50 rounded-xl shadow-md hover:-translate-y-1">
              <Image
                src="/rubber.jpg"
                alt="rubber-machine"
                className="w-full h-64 object-cover rounded-lg"
                width={200}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Net Rubber Machine
                </h3>
                <p className="text-gray-600 pt-4">
                  Produces durable aluminium nets for windows, offering safety,
                  ventilation, and insect protection.
                </p>
                <Link
                  href="/products"
                  className="text-blue-700 mt-4 inline-flex items-center font-medium"
                >
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex px-4 py-3 rounded-md bg-black text-white mx-auto"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SERVICE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-bold text-3xl text-gray-900">Our Services</h3>
            <p className=" text-lg text-gray-600 mx-auto max-w-3xl mt-4">
              We provide comprehensive services to ensure your machinery
              operates at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-xl hover:-translate-y-1">
              <div className="bg-black rounded-full h-16 w-16 flex justify-center items-center p-3 mb-6">
                <CogIcon size={28} className="text-white " />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Machine Installation
              </h3>
              <p className="text-gray-600">
                Professional installation services to ensure your machinery is
                set up correctly and efficiently.
              </p>
              <Link
                href="/services"
                className="text-blue-700 mt-4 inline-flex items-center font-medium"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-white p-6 shadow-md rounded-xl hover:-translate-y-1">
              <div className="bg-black rounded-full h-16 w-16 flex justify-center items-center p-3 mb-6">
                <WrenchIcon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Maintenance & Repair
              </h3>
              <p className="text-gray-600">
                Regular maintenance and prompt repair services to minimize
                downtime and extend machine lifespan.
              </p>
              <Link
                href="/services"
                className="text-blue-700 mt-4 inline-flex items-center font-medium"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-white p-6 shadow-md rounded-xl hover:-translate-y-1">
              <div className="bg-black rounded-full h-16 w-16 flex justify-center items-center p-3 mb-6">
                <HammerIcon size={28} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Custom Machine Design
              </h3>
              <p className="text-gray-600">
                Tailored machine design solutions to meet your specific
                industrial requirements.
              </p>
              <Link
                href="/services"
                className="text-blue-700 mt-4 inline-flex items-center font-medium"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AMESOADE */}
      <section className="py-16 bg-white">
        <div className=" container mx-auto px-4 md:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-gray-900 text-3xl">
                Why Choose Amesoade?
              </h2>

              <p className="text-lg text-gray-600 mx-auto max-w-3xl mt-5">
                With over 25 years of experience in the industrial machinery
                sector, Amesoade has established itself as a leader in providing
                high-quality engineering solutions for businesses worldwide.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mt-4">
                      Expert Engineering Team
                    </h3>
                    <p className="text-gray-600 ">
                      Our engineers bring decades of combined experience to
                      every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mt-4">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600 ">
                      Every machine undergoes rigorous testing to ensure
                      performance and reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mt-4">
                      Comprehensive Support
                    </h3>
                    <p className="text-gray-600 ">
                      From installation to maintenance, we provide end-to-end
                      support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircleIcon size={24} className="text-black mr-3 mt-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mt-4">
                      Innovation Focus
                    </h3>
                    <p className="text-gray-600 ">
                      We continually integrate the latest technologies into our
                      machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex px-4 py-3 rounded-md bg-black text-white mx-auto"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={Home}
                alt="about-us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to Elevate Your Industrial Operations?
          </h2>
          <p className="text-lg mx-auto max-w-3xl mt-6 ">
            Contact our team today to discuss how Amesoade's engineering
            solutions can help optimize your production processes.
          </p>
          <Link
            href="/#contact"
            className="inline-flex px-4 py-3 rounded-md bg-white text-black mt-4 mx-auto"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
