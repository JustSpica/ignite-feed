import React from 'react';

import { Header, Profile, Post } from 'components';

function App() {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[70rem] p-6 mx-auto pt-8 grid grid-cols-[268px_1fr] gap-8 max-md:grid-cols-1 items-start">
        <Profile />
        <section>
          <Post />
        </section>
      </main>
    </div>
  );
}

export default App;
