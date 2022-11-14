import React from 'react';

import { Header, Profile } from 'components';

function App() {
  return (
    <div>
      <Header />
      <main className="w-full px-40 pt-8 grid grid-cols-[268px_1fr] items-start">
        <Profile />
        <section>Home</section>
      </main>
    </div>
  );
}

export default App;
