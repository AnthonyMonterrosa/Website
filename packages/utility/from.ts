type FromFunction = <Input, KeyUnion extends keyof Input>(
  input: Input,
  keys: Array<KeyUnion>
) => Pick<Input, KeyUnion>


export const from: FromFunction = <Input, KeyUnion extends keyof Input>(input, keys) => {
  let output = {} as Pick<Input, KeyUnion>;
  keys.forEach(key => {
    output[key] = input[key];
  });

  return output;
}