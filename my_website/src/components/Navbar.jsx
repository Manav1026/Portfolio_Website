export const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-gray-800 text-xl font-semibold">Manav Dhami</div>
          <div className="space-x-6 text-gray-600 font-medium">
            <a href="#home" className="hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
