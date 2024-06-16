import { forwardRef, useRef } from 'react';

export function SomeForm() {
  const inputRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    console.log(formData.get('message'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <SomeInput
        ref={inputRef}
        name='message'
        title='enter your message to the world:'
      />
      <button type='submit'>send ...</button>
    </form>
  );
}

function Input(props, ref) {
  const { title, name } = props;

  return (
    <label>
      {title}
      <input type='text' ref={ref} name={name} />
    </label>
  );
}

const SomeInput = forwardRef(Input);
