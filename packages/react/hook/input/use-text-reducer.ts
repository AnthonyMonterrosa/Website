import React, { useState } from 'react';
import { from } from '../../../utility';

type TextReducerHook = (options: {
  text: string;
}) => [string, (text: string) => void];

export const useTextReducer: TextReducerHook = options => {
  const [text, setText] = useState(from(options, ['text']));

  return [text, (text: string) => {setText(text);}]; 
} 