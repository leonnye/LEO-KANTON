import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-lg py-12 mt-auto border-t border-purple-300/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-violet-200 to-purple-200 bg-clip-text text-transparent">Leo Kanton</h3>
            <p className="text-purple-200/90">Transforming ideas into exceptional digital experiences.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-violet-200">Services</h3>
            <ul className="space-y-2 text-purple-200/90">
              <li className="hover:text-purple-200 transition-colors cursor-pointer">Website Design</li>
              <li className="hover:text-purple-200 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-purple-200 transition-colors cursor-pointer">Maintenance</li>
              <li className="hover:text-purple-200 transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-violet-200">Contact</h3>
            <ul className="space-y-2 text-purple-200/90">
              <li>123 Web Street</li>
              <li>Digital City, 12345</li>
              <li className="hover:text-purple-200 transition-colors cursor-pointer">info@leokanton.com</li>
              <li className="hover:text-purple-200 transition-colors cursor-pointer">+1 234 567 890</li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-violet-200">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-purple-900/30 p-2 rounded-full hover:bg-purple-900/50 transition-colors group">
                <Twitter className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-purple-900/30 p-2 rounded-full hover:bg-purple-900/50 transition-colors group">
                <Linkedin className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-purple-900/30 p-2 rounded-full hover:bg-purple-900/50 transition-colors group">
                <Github className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="bg-purple-900/30 p-2 rounded-full hover:bg-purple-900/50 transition-colors group">
                <Mail className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-300/10 mt-12 pt-8 text-center text-purple-200/70">
          <p>&copy; {new Date().getFullYear()} Leo Kanton. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}