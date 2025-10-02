const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/img/c5d2bb9e-4c62-41b3-ae7b-81a004682137.jpg" 
              alt="Apple Like Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-semibold text-gray-900">Apple Like</span>
          </div>
          <p className="text-gray-600">© 2024 Apple Like. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;