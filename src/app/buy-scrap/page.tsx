'use client';

import { useEffect } from 'react';

export default function BuyScrapPage() {
  useEffect(() => {
    // Redirect to PlastXchange subdomain
    window.location.href = 'https://plastixchange.penaca.in/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-white text-lg">Redirecting to PlastXchange...</p>
      </div>
    </div>
  );
}
