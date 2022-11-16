import React from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from 'components';

export function Comment() {
  return (
    <div className="flex space-x-4">
      <Avatar
        src="https://i.pinimg.com/originals/b1/04/bb/b104bbae594b5621c4b65c173b8e3206.jpg"
        size="sm"
      />
      <div className="flex-1 space-y-4">
        <div className="p-4 bg-[#29292E] rounded-lg">
          <header className="flex items-start justify-between">
            <div>
              <strong className="block text-sm text-gray-200 font-bold">
                Guilherme Luiz
              </strong>
              <time className="text-xs text-gray-500">Cerca de 2h atrás</time>
            </div>
            <button
              className="text-gray-500 hover:text-red-400 transition-colors"
              title="Excluir comentário"
            >
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Esse é um comentário fixo para teste.
          </p>
        </div>
        <footer>
          <button className="flex items-center text-gray-500 hover:text-green-700 transition-colors">
            <ThumbsUp size={20} />
            <span className="ml-2">Aplaudir</span>
            <span className='before:content-["•"] before:px-1'>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
