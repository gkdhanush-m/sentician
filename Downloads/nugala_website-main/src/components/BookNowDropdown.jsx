import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BookNowDropdown = ({ buttonStyle = 'primary', className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const whatsappUrl = "https://wa.me/919090254343?text=Hello!%20Can%20I%20get%20more%20info%20on%20this%3F";
    const callUrl = "tel:+919090254343";

    const isOutline = buttonStyle === 'outline';

    return (
        <div className={`flex flex-col items-center sm:items-start w-full sm:w-auto ${className}`} ref={dropdownRef}>
            {/* Main Book Now Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={`w-full sm:w-auto px-7 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 cursor-pointer ${
                    isOutline
                        ? 'bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10'
                        : 'bg-gradient-to-r from-[#239FE3] to-[#163a63] text-white hover:opacity-95 border border-white/20'
                }`}
            >
                <span>Book Now</span>
                {isOpen ? (
                    <FaChevronUp className="w-3.5 h-3.5 opacity-90 transition-transform duration-200 ml-1" />
                ) : (
                    <FaChevronDown className="w-3.5 h-3.5 opacity-90 transition-transform duration-200 ml-1" />
                )}
            </button>

            {/* Inline Expanded Options - No Z-Index Overlap */}
            {isOpen && (
                <div className="w-full sm:w-64 mt-3 flex flex-col gap-2.5 transition-all duration-300 animate-fadeIn">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-full border border-white/40 bg-white text-[#0c223c] hover:bg-gray-100 font-semibold text-sm transition-all duration-200 shadow-lg group cursor-pointer"
                    >
                        <FaWhatsapp className="text-lg text-[#25D366] transition-colors" />
                        <span>Book via WhatsApp</span>
                    </a>

                    <a
                        href={callUrl}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-full border border-white/40 bg-white text-[#0c223c] hover:bg-gray-100 font-semibold text-sm transition-all duration-200 shadow-lg group cursor-pointer"
                    >
                        <FaPhoneAlt className="text-sm text-[#239FE3] transition-colors" />
                        <span>Book via Call</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default BookNowDropdown;
