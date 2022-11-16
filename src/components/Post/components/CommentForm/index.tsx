import React from 'react';

import { Button } from 'components';

export function CommentForm() {
  return (
    <form className="w-full mt-6 pt-6 border-t border-t-gray-700">
      <strong className="text-gray-200 leading-relaxed">
        Deixe seu feedback
      </strong>
      <textarea
        className="w-full h-24 my-4 p-4 border-none rounded-lg resize-none text-gray-200 leading-relaxed bg-gray-900"
        placeholder="Deixe seu comentário"
      />
      <Button>Publicar</Button>
    </form>
  );
}
