import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  className = '',
  name,
  required = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        required={required}
        className={`
          w-full px-4 py-2.5 border border-gray-300 rounded-lg
          bg-white text-gray-900 placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500
          transition-all duration-200
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="mt-1 text-sm font-medium text-red-600">{error}</p>
      )}
    </div>
  );
};
