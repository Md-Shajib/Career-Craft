const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
        <div className=" px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {/* Column 1: Company Info */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Career Craft</h2>
                    <p className="text-sm mb-2">Our tagline goes here.</p>
                    <p className="text-sm">1234 Street Name, City, State, 12345</p>
                    <p className="text-sm">Email: info@company.com</p>
                    <p className="text-sm">Phone: (123) 456-7890</p>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Our Services</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Web Development</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Mobile Applications</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">SEO Optimization</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Digital Marketing</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Resources</h2>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Help Center</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Column 4: Follow Us */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.25 3.438 9.688 8 11.188v-7.906h-2.406v-3.282h2.406v-2.438c0-2.375 1.375-3.687 3.438-3.687 1 0 2.062.187 2.062.187v2.281h-1.156c-1.125 0-1.438.688-1.438 1.375v1.562h2.812l-.438 3.282h-2.375v7.906c4.563-1.5 8-5.938 8-11.188 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.73 0-1.325.597-1.325 1.325v21.351c0 .73.597 1.325 1.325 1.325h21.351c.73 0 1.325-.597 1.325-1.325V1.325c0-.73-.597-1.325-1.325-1.325zm-14.525 21.125h-3.475v-10.5h3.475v10.5zm-1.737-11.89c-1.115 0-2.025-.91-2.025-2.025 0-1.117.91-2.025 2.025-2.025 1.116 0 2.025.908 2.025 2.025 0 1.115-.909 2.025-2.025 2.025zm14.262 11.89h-3.475v-5.75c0-1.367-.025-3.13-1.905-3.13-1.907 0-2.197 1.489-2.197 3.023v5.857h-3.475v-10.5h3.475v1.43h.05c.485-.917 1.671-1.885 3.45-1.885 3.688 0 4.375 2.426 4.375 5.585v5.87z"/></svg>
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.25 3.438 9.688 8 11.188v-7.906h-2.406v-3.282h2.406v-2.438c0-2.375 1.375-3.687 3.438-3.687 1 0 2.062.187 2.062.187v2.281h-1.156c-1.125 0-1.438.688-1.438 1.375v1.562h2.812l-.438 3.282h-2.375v7.906c4.563-1.5 8-5.938 8-11.188 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="mt-5"/>
            <div className="md:flex md:justify-between md:px-8 md:pt-5 text-center">
                <p className="text-sm mt-1 md:mt-0"><span className="text-blue-600 mr-1 font-bold text-lg">&copy;</span>2024 Career Craft. All Rights Reserved</p>
                <p className="text-sm mt-2 md:mt-0">Powered by Career Craft</p>
            </div>
        </div>
    </footer>

  );
};

export default Footer;
