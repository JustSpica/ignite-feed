import React from 'react';
import { PencilSimpleLine } from 'phosphor-react';

import { Avatar, Button } from 'components';

export function Profile() {
  return (
    <aside className="w-full bg-gray-800 rounded-lg overflow-hidden">
      <header className="w-full h-16 bg-gray-700" />
      <section className="pb-6 flex flex-col items-center">
        <Avatar
          className="-mt-8"
          src="https://i.pinimg.com/originals/b1/04/bb/b104bbae594b5621c4b65c173b8e3206.jpg"
          hasBorder
        />
        <strong className="mt-4 leading-relaxed text-gray-200">
          Guilherme Spica Luiz
        </strong>
        <span className="text-sm leading-relaxed text-gray-500">
          Web Developer React
        </span>
      </section>
      <footer className="pt-6 pb-8 border-t border-gray-700 flex items-center justify-center">
        <Button asChild outline>
          <a href="#">
            <PencilSimpleLine size={20} /> Editar seu perfil
          </a>
        </Button>
      </footer>
    </aside>
  );
}
