import { useTheme } from '../../../hooks/useTheme';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='relative w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
                 bg-yellow-300 dark:bg-gray-700'
    >
      {/* The sliding circle */}
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md
                    transform transition-transform duration-300
                    ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
      >
        <span className='flex items-center justify-center w-full h-full text-lg'>
          {theme === 'dark' ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
};

export default DarkModeToggle;
