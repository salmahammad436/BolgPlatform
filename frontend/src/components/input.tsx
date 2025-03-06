import { JSX } from 'react';

interface InputProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function Input({ name, value, placeholder, onChange }: InputProps): JSX.Element {
  return (
    <input
      type="text"
      name={name} 
      placeholder={placeholder}  
      value={value}  
      onChange={onChange}  
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
    />
  );
}
