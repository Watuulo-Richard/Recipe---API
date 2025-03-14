import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  // Changed to named export
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chili POS</h3>
            <p className="text-gray-300">
              Elevating your dining experience with cutting-edge restaurant management solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2023 Chili POS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

