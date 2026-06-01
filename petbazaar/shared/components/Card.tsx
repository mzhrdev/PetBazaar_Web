import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  bordered?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = false,
  bordered = true,
  padding = 'md',
}) => {
  const paddingClass = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }[padding];

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-sm
        ${bordered ? 'border border-gray-200' : ''}
        ${paddingClass}
        ${hover ? 'hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
