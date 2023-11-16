import React from 'react';
import './App.css';

const Sidebar: React.FC<{ filmes: any[]; filtrarPorCategoria: (categoria: string) => void }> = ({ filmes, filtrarPorCategoria }) => {
  return (
      <div className="sidebar">
        <ul>
        <li><button onClick={() => filtrarPorCategoria('todos')}>Todos</button></li>
        <li><button onClick={() => filtrarPorCategoria('Ação')}>Ação</button></li>
        <li><button onClick={() => filtrarPorCategoria('comedia')}>Comédia</button></li>
        <li><button onClick={() => filtrarPorCategoria('romance')}>Romance</button></li>
        <li><button onClick={() => filtrarPorCategoria('ficcao')}>Ficção Científica</button></li>
        </ul>
      </div>
  );
};

export default Sidebar;