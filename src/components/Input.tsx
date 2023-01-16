import React from 'react';

interface Props {
  name: string;
  type: 'number' | 'text' | 'password' | 'radio' | 'checkbox';
  label?: string;
}
export const Input = ({ name, type, label }: Props) => {
  if (!label) return <input name={name} type={type} />;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <label>{label}</label>
      <input name={name} type={type} />
    </div>
  );
};
