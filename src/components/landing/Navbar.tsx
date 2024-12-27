import { Smile } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <Smile className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold text-white">MrAppy</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-blue-100 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Log In →
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
