import React from "react";
import icons from "../Images/Frame 1321314982.png";
import logo from "../Images/Layer_1 (1).png";
import map from "../Images/Frame 1321314992.png";

function Footer() {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto">
        {/* Logo Section */}
        <div className="flex justify-start mb-8">
          <img src={logo} alt="logo" className="w-auto h-16" />
        </div>

        {/* Footer Content */}
        <div className="flex flex-wrap justify-between">
          {/* Get in Touch Section */}
          <div className="flex-1 text-left ml-5 mb-8">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="mb-4">
              <h4 className="text-sm font-medium">Contact Number</h4>
              <h6 className="text-sm">+971 4 2979464</h6>
              <h6 className="text-sm mb-5">+971 56 4848613</h6>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-3">Email</h4>
              <h6 className="text-sm mb-6">info@smiledentaldubail.com</h6>
              <img src={icons} alt="footer icons" className="mt-4" />
            </div>
          </div>

          {/* Our Address Section */}
          <div className="flex-1 text-left ml-5 mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Address</h2>
            <div className="mb-4">
              <h4 className="text-sm font-medium">
                Room No:314 Al Attar Shopping Mall
              </h4>
              <h6 className="text-sm">Near to Karama Center, Al Karama</h6>
              <h6 className="text-sm mb-5">P.O.Box:125706, Dubai, UAE</h6>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-3">Location</h4>
              <img src={map} alt="location map" className="mt-4" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1 text-left ml-5 mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="space-y-2">
              <a href="/" className="block hover:underline">
                Home
              </a>
              <a href="/" className="block hover:underline">
                About Us
              </a>
              <a href="/" className="block hover:underline">
                Services
              </a>
              <a href="/" className="block hover:underline">
                Gallery
              </a>
              <a href="/" className="block hover:underline">
                Blogs
              </a>
            </div>
          </div>

          {/* Additional Quick Links Section */}
          <div className="flex-1 text-left ml-5 mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="space-y-2">
              <a href="/" className="block hover:underline">
                Children Dentist
              </a>
              <a href="/" className="block hover:underline">
                General Dentist
              </a>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <div className="space-y-2">
                <a href="/" className="block hover:underline">
                  Open all 7 Days
                </a>
                <a href="/" className="block hover:underline">
                  9:00 AM to 9:00 PM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
