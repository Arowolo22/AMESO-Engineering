import Image from "next/image"
import Navbar from "@/components/Navbar"
import Link from "next/link";

import {
  CheckCircleIcon,
  WrenchIcon,
  HeartHandshakeIcon,
  ClipboardCheckIcon,
} from "lucide-react";
import Footer from "@/components/Footer"
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
                  entire lifecycle of your industrial machinery from initial
                  consultation and design to installation, maintenance, and
                  cutting of sleeve and crank shaft and also making of net rubbers of different sizes.
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
                  alt="prince-Machine"
                  className="object-cover w-full"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Service Offerings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our range of specialized services designed to optimize
                your industrial operations.
              </p>
            </div>

            {/* Machine Installation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <div size={18} className="mr-2" /> Machine Installation
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Machine Installation
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our expert installation team ensures your new machinery is set
                  up correctly, calibrated to perfection, and ready for optimal
                  performance from day one.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">
                      Site preparation and assessment
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">
                      Precision machine positioning and alignment
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">
                      Utility connections and testing
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">
                      Comprehensive operator training
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/rubber.jpg"
                  alt="Rubber-Machine"
                  className="object-cover w-full"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* Maintenance & Repair */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/Machine.jpg"
                  alt="Machine-Maintenance"
                  className="object-cover w-full"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <WrenchIcon size={18} className="mr-2" /> Maintenance & Repair
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Comprehensive Maintenance & Repair
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Keep your machinery running at peak efficiency with our
                  preventative maintenance programs and rapid response repair
                  services.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">
                      Scheduled preventative maintenance
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">Emergency repair services</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">Genuine replacement parts</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">Performance optimization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <ClipboardCheckIcon size={18} className="mr-2" /> Consultation
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Technical Consultation Services
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Leverage our engineering expertise to optimize your production
                  processes, improve efficiency, and solve complex technical
                  challenges.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">
                      Process optimization analysis
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">Machine selection guidance</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">Facility layout planning</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon
                      size={20}
                      className="text-blue-700 mr-3 mt-0.5"
                    />
                    <p className="text-gray-600">Technical troubleshooting</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/consult.jpg"
                  alt="Consultation-Service"
                  className="object-cover w-full"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-white bg-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Optimize Your Operations?
            </h2>
            <p className="tex-lg md:text-xl mx-auto max-w-3xl mt-4">
              Contact our service team today to discuss how we can support your
              industrial machinery needs.
            </p>
            <Link
              href="/#contact"
              className="inline-flex px-4 py-3 rounded-md bg-white mt-4 text-black mx-auto"
            >
              Get in Touch
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
}