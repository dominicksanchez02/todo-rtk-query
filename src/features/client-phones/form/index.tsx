import { FormEvent, useState, useEffect } from 'react';
import { InputProps, FormProps } from './index-interfaces';
import './index.css';

const Form = (props: FormProps): JSX.Element => {
  const [ formTitle, setFormTitle ] = useState<string>('Add');
  const [ buttonLabel, setButtonLabel ] = useState<string>('Add');
  const [ inputs, setInputs ] = useState<InputProps>({ name: '', clientPhone: '' });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit({
      ...inputs,
      rcpid: props.phone ? props.phone.rcpid : undefined
    });
    formReset();
  };
  const formReset = () => {
    setFormTitle('Add');
    setButtonLabel('Add');
    setInputs({ name: '', clientPhone: '' });
  }
  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({
      ...inputs,
      [ name ]: value
    });
  }

  useEffect(() => {
    const phone = props.phone;

    if (phone) {
      const { name, clientPhone } = phone;

      if (phone.rcpid) {
        setFormTitle('Edit');
        setButtonLabel('Save');
      }

      setInputs({ name, clientPhone });
    }
  }, [ props.phone ]);

  const { name, clientPhone } = inputs;
  const formElement = (
    <div className="form">
      <h3>{ formTitle } Form</h3>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={ name }
          onChange={ handleInputChange }
        />
        <input
          type="text"
          name="clientPhone"
          placeholder="Phone Number"
          value={ clientPhone }
          onChange={ handleInputChange }
        />
        <button type="submit" className="btnForm">{ buttonLabel }</button>
      </form>
    </div>
    
  );

  return formElement;
};

export default Form;