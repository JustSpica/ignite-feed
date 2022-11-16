import React from 'react';

import { Avatar } from 'components';
import { Comment, CommentForm, Paragraph } from './components';

export function Post() {
  return (
    <article className="p-10 bg-gray-800 rounded-lg">
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar
            src="https://i.pinimg.com/originals/b1/04/bb/b104bbae594b5621c4b65c173b8e3206.jpg"
            hasBorder
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
      <section className="mt-6 text-gray-400 leading-relaxed">
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
      </section>
      <CommentForm />
      <section className="mt-8 space-y-6">
        <Comment />
        <Comment />
        <Comment />
      </section>
    </article>
  );
}
