import React from 'react';

import { Paragraph } from './components/Paragraph';
import { CommentForm } from './components/CommentForm';

export function Post() {
  return (
    <article className="p-10 bg-gray-800 rounded-lg">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pinimg.com/originals/b1/04/bb/b104bbae594b5621c4b65c173b8e3206.jpg"
            className="w-16 h-16 border-2 border-gray-800 rounded-lg outline outline-2 outline-green-500"
          />
          <div className="flex flex-col">
            <strong className="text-gray-200 leading-relaxed">
              Guilherme Luiz
            </strong>
            <span className="text-sm text-gray-500 leading-relaxed">
              Web Developer React
            </span>
          </div>
        </div>
        <time
          className="text-sm text-gray-500 leading-relaxed"
          title="11 de Novembro de 2022 às 11:19"
          dateTime="2022-11-16 11:19:00"
        >
          Publicado há 1h
        </time>
      </header>
      <div className="mt-6 text-gray-400 leading-relaxed">
        <Paragraph>Fala galeraa 👋</Paragraph>
        <Paragraph>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </Paragraph>
        <Paragraph asChild asAnchor>
          <a href="">👉 jane.design/doctorcare</a>
        </Paragraph>
        <Paragraph asChild asAnchor>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </Paragraph>
      </div>
      <CommentForm />
    </article>
  );
}
