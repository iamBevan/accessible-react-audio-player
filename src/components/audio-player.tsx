import React from 'react';

interface Props {
  src: string;
}

export function AudioPlayer({ src = '' }: Props) {
  return <audio src={src} />;
}
