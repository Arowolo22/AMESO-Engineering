import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  CheckCircleIcon,
  AwardIcon,
  UsersIcon,
  TargetIcon,
} from "lucide-react";
import Footer from "@/components/Footer"

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
              About Amesoade
            </h1>
            <p className="mx-auto text-lg md:text-xl text-gray-200 max-w-3xl text-center mt-5">
              Engineering excellence and innovation since 2015. Learn about our
              journey, our mission, and our commitment to quality.
            </p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our History
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2015, Amesoade began as a small engineering
                  workshop with a vision to revolutionize industrial machinery
                  solutions. What started with just five engineers has grown
                  into a global company serving clients across multiple
                  industries.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Throughout our journey, we've maintained our commitment to
                  innovation, quality, and customer satisfaction. Our pioneering
                  approach to machine design has earned us recognition as
                  industry leaders.
                </p>
                <p className="text-lg text-gray-600">
                  Today, Amesoade stands as a testament to engineering
                  excellence, with a diverse portfolio of machines that power
                  industries worldwide. Our team of over 30 engineers,
                  technicians, and support staff continues to push the
                  boundaries of what's possible in industrial machinery.
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/ameso-img.jpg"
                  alt="ameso-Image"
                  className="object-cover w-full"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 lg:px-8 ">
            <div className="text-center mb-12">
              <h2 className="font-bold text-gray-900 text-3xl">
                Our Mission, Vision & Values
              </h2>
              <p className=" text-lg text-gray-600 mx-auto max-w-3xl mt-4">
                The principles that guide everything we do at Amesoade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 text-center">
                <div className="bg-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TargetIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide innovative, reliable, and efficient industrial
                  machinery solutions that enhance productivity and drive
                  success for our clients worldwide.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 text-center">
                <div className="bg-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <AwardIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our vision
                </h3>
                <p className="text-gray-600">
                  To be the global leader in industrial machinery innovation,
                  setting new standards for performance, reliability, and
                  technological advancement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:-translate-y-1 text-center">
                <div className="bg-black p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <UsersIcon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our values
                </h3>
                <p className="text-gray-600">
                  Excellence, Integrity, Innovation, Collaboration, and Customer
                  Focus guide every decision we make and every machine we build.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-blue-700 text-white">
          <div className="container px-4 md:px-6 lg:px-8 mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto">
              Partner with Amesoade for innovative engineering solutions that
              drive your business forward.
            </p>
            <Link
              href="/#contact"
              className="inline-flex px-4 py-3 rounded-md bg-white mt-4 text-black mx-auto"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
}