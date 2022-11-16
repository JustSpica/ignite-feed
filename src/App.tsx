import React from 'react';

import { Header, Profile, Post } from 'components';

function App() {
  return (
    <div>
      <Header />
      <main className="w-full mx-auto px-40 pt-8 space-x-8 grid grid-cols-[268px_1fr] items-start">
        <Profile />
        <section>
          <Post />
        </section>
      </main>
    </div>
  );
}

export default App;
