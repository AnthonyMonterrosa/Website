import React from 'react';
import { Input } from '../hook';
import { from } from '../../utility';

type RegisterHook = (properties: {
  text: string;
}) => any;

export const Register = properties => {
  const [text, handler] = Input.useTextReducer(from(properties, ['text']));

  return <input 
    type = 'text'
    name = 'register'
    value = {text}
    onChange = {handler}
  />
}