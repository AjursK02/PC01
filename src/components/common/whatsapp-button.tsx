'use client';

import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello, I visited the Penaca Circular Solutions website and I'm interested in your sustainable plastic solutions. Could you help me with more details?",
  className 
}: WhatsAppButtonProps) {
  // Format phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${formattedPhone}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  const handleClick = () => {
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
      }}
      className={cn(
        "w-14 h-14 rounded-full",
        "bg-[#25D366]",
        "shadow-2xl hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)]",
        "flex items-center justify-center",
        "transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "group relative overflow-visible",
        className
      )}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] via-[#20BA5A] to-primary-600 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Simple Help Robot Icon */}
      <div className="relative w-8 h-8 flex items-center justify-center z-10 overflow-visible">
        <svg
          viewBox="0 -8 56 56"
          className="w-full h-full text-white transition-all duration-300 group-hover:scale-110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }}
        >
          {/* Robot Head - Simple and Clean */}
          <rect
            x="10"
            y="12"
            width="36"
            height="32"
            rx="3"
            fill="currentColor"
          />
          
          {/* Antenna - extends on hover */}
          <g className="robot-antenna-group">
            {/* Antenna rod - extends on hover */}
            <rect
              x="27"
              y="12"
              width="2"
              height="6"
              fill="currentColor"
              className="opacity-80 robot-antenna-rod"
            />
            {/* Antenna tip - moves up on hover */}
            <circle
              cx="28"
              cy="6"
              r="2.5"
              fill="currentColor"
              className="opacity-80 robot-antenna-tip"
            />
          </g>
          
          {/* Left Eye - blinks on hover */}
          <circle
            cx="22"
            cy="22"
            r="3"
            fill="#1a1a1a"
            className="robot-eye"
          />
          
          {/* Right Eye - blinks on hover */}
          <circle
            cx="34"
            cy="22"
            r="3"
            fill="#1a1a1a"
            className="robot-eye"
          />
          
          {/* Simple Smile */}
          <path
            d="M 18 32 Q 28 36 38 32"
            stroke="#1a1a1a"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Animated glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      
      {/* Premium tooltip on hover */}
      <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[10000]">
        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 text-white px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap">
          <span className="text-sm font-semibold">Chat with Us</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-neutral-900" />
          {/* Decorative accent */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full opacity-60" />
        </div>
      </div>
    </button>
  );
}

