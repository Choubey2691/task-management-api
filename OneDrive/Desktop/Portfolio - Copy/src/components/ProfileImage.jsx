import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

/**
 * ProfileImage Component
 * 
 * A polished profile image with a glowing border and a fullscreen lightbox modal.
 * Features:
 * - Circular image with gradient glow effect
 * - Fullscreen modal with zoom and fade animations
 * - "Download Image" button that triggers the modal
 * - Close on ESC, click outside, or X button
 * - Responsive design
 */
const ProfileImage = ({ src, alt, fullSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Profile Image Container with Glow Effect */}
      <motion.div
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
      >
        {/* Animated Gradient Glow Border */}
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-emerald-500 to-indigo-600 rounded-full blur-md opacity-40 group-hover:opacity-100 group-hover:blur-lg transition duration-500 animate-pulse"></div>
        
        {/* Inner Container to hold the circular image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 shadow-2xl flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </motion.div>

      {/* Action Button: Opens the same lightbox modal */}
      <button
        onClick={openModal}
        className="flex items-center gap-2 px-8 py-3.5 bg-slate-800/80 backdrop-blur-md hover:bg-blue-600 text-white rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)] active:scale-95 group border border-slate-700"
      >
        <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
        Download Image
      </button>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-6 sm:p-12 md:p-20"
            onClick={closeModal}
          >
            {/* Close UI - Top Right */}
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-neutral-400 hover:text-white transition-all duration-300 z-[1001] p-2 hover:rotate-90 hover:scale-110"
              aria-label="Close"
            >
              <X size={40} />
            </button>

            {/* Centered Large Image with Zoom Effect */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.6, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 150,
                duration: 0.4
              }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/image">
                <img
                  src={fullSrc || src}
                  alt={alt}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(59,130,246,0.2)] border border-white/10"
                />
                
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileImage;
