function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">GICCS</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
