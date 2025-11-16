import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const pages = [
        { name: 'Home', path: '/' },
        { name: 'Todo List', path: '/todo' },
        { name: 'Configuration', path: '/config' },
    ];

    // Get current path
    const currentPath = window.location.pathname;

    const [mobileMenuHidden, setMobileMenuHidden] = useState(true);
    const toggleMobileMenu = () => {
        setMobileMenuHidden(!mobileMenuHidden);
    };

    return (
        <header>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold text-blue-600">Todo App</span>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {pages.map((page) => (
                                <div
                                    key={page.path}
                                    className=
                                    {
                                        currentPath === page.path
                                            ? "nav-link text-blue-600 hover:cursor-pointer hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors border-b-2 border-blue-600"
                                            : "nav-link text-gray-600 hover:cursor-pointer hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                                    }
                                    data-page={page.path}
                                    onClick={() => navigate(page.path)}
                                >
                                    {page.name}
                                </div>
                            ))}
                        </div>

                        {/* Hamburger Menu */}
                        <div className="md:hidden">
                            <button id="mobileMenuBtn" type="button" className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2" aria-expanded="true" onClick={toggleMobileMenu}>
                                <span className="sr-only">Open main menu</span>
                                {mobileMenuHidden ? (
                                    // Hamburger icon
                                    <svg id="menuIcon" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                ) : (
                                    // Close icon (hidden by default)
                                    <svg id="closeIcon" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {!mobileMenuHidden && (
                    <div id="mobileMenu" className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* <a href="index.html" className="nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors" data-page="home">Home</a>
                            <a href="todo.html" className="nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors" data-page="todo">Todo List</a>
                            <a href="config.html" className="nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors" data-page="config">Configuration</a> */}
                            {pages.map((page) => (
                                <div
                                    key={page.path}
                                    className={
                                        currentPath === page.path
                                            ? "nav-link-mobile block text-blue-600 bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                                            : "nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors"
                                    }
                                    data-page={page.path}
                                    onClick={() => {
                                        navigate(page.path);
                                    }}
                                >
                                    {page.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;