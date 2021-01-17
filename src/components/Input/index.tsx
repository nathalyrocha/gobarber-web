import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Usamos a interface para especificar(sobrescrever) uma propriedade à ser usada
  name: string;
  icon: React.ComponentType<IconBaseProps>; // Usado quando queremos usar um componente como um propriedade.
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
