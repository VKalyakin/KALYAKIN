import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Button from './components/Button';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOpacity, setCursorOpacity] = useState(0); // Начальная опаность — скрыт

  useEffect(() => {
    // Триггер анимации меню при загрузке
    setTimeout(() => setMenuOpen(true), 500);

    // Отслеживание позиции курсора
    const handleMouseMove = (e) => {
      console.log('Mouse moved to:', e.clientX, e.clientY); // Отладка
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setCursorOpacity(0.8); // Показываем круг при движении
    };

    // Таймер для скрытия круга, если курсор не движется
    const handleMouseIdle = () => {
      const timer = setTimeout(() => {
        console.log('Mouse idle, hiding cursor highlight'); // Отладка
        setCursorOpacity(0); // Скрываем круг через 1 секунду без движения
      }, 1000);

      return () => clearTimeout(timer);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleMouseIdle);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleMouseIdle);
    };
  }, []);

  return (
    <div className="app">
      <BackgroundAnimation />
      <div className={`content ${menuOpen ? 'menu-open' : ''}`}>
        <Header />
        <Button />
      </div>
      <div
        className="cursor-highlight"
        style={{ left: cursorPosition.x, top: cursorPosition.y, opacity: cursorOpacity }}
      />
    </div>
  );
}

export default App;
