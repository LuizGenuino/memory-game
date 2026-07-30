import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    gradient?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    gradient = 'from-indigo-500 to-purple-600',
    size = 'md',
    icon,
    fullWidth,
}) => {
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base sm:text-lg',
        lg: 'px-8 py-4 text-lg sm:text-xl md:text-2xl',
    };

    return (
        <button
            onClick={onClick}
            className={`
        ${fullWidth ? 'w-full' : ''}
        ${sizes[size]}
        relative overflow-hidden
        bg-gradient-to-r ${gradient}
        text-white font-bold rounded-2xl
        shadow-xl shadow-black/30
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl hover:-translate-y-1
        active:scale-95
        border border-white/20
        group
      `}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {icon && <span className="text-xl sm:text-2xl">{icon}</span>}
                {children}
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
    );
};
