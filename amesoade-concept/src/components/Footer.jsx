"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AMESOADE</h3>
            <p className="text-gray-400 mb-4">
              Engineering excellence in industrial machinery solutions since
              2015.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Machine Installation</li>
              <li className="text-gray-400">Maintenance & Repair</li>
              <li className="text-gray-400">Custom Machine Design</li>
              <li className="text-gray-400">Technical Consultation</li>
              <li className="text-gray-400">Spare Parts Supply</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon size={18} className="mr-2 mt-1 text-white" />
                <span className="text-gray-400">+234 803 393 8711</span>
              </li>
              <li className="flex items-start">
                <MailIcon size={18} className="mr-2 mt-1 text-white" />
                <span className="text-gray-400">amesoadeconcept@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon size={18} className="mr-2 mt-1 text-white" />
                <span className="text-gray-400">
                  Aduramigba, Osogbo, Osun State, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Amesoade Concept. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
