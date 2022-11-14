import React from 'react';

import igniteLogo from 'assets/svg/ignite-logo.svg';

export function Header() {
  return (
    <header className="w-full py-5 bg-gray-800 flex items-center justify-center space-x-4">
      <img src={igniteLogo} alt="Ignite+Logo" />
      <strong className="text-2xl">Ignite Feed</strong>
    </header>
  );
}
