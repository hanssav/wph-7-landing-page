import React, { useEffect, useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import clsx from 'clsx';

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <button
      aria-label='Toggle dark mode'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={clsx(
        'flex items-center justify-center rounded-full',
        'h-14 w-14 text-3xl cursor-pointer',
        'bg-transparent shadow-lg',

        // Enable transforms + smooth transition
        'transform transition-all duration-500 ease-out',

        // Respect prefers-reduced-motion (no animation for users who disable motion)
        'motion-safe:transition-all motion-reduce:transition-none',

        // Animate from bottom + fade in (on mount state change)
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      )}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
