import React, { useState } from 'react';
import './App.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    lembrarSenha: '',
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    // // Espaço para adicionar a lógica do formulário
    // console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>MOVIE ON</h1>
      <div>
        <h2>Crie sua conta</h2>
        <div>
          <div className="form-group">
            <label htmlFor="nome"></label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="sobrenome"></label>
            <input
              type="text"
              className="form-control"
              id="sobrenome"
              placeholder="Sobrenome"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="telefone"></label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            placeholder="(__) _____-____"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="E-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha"></label>
          <input
            type="password"
            className="form-control"
            id="senha"
            placeholder="Senha"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmarSenha"></label>
          <input
            type="password"
            className="form-control"
            id="confirmarSenha"
            placeholder="Confirmar a senha"
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            className="form-check-input"
            id="lembrarSenha"
          />
          <label className="form-check-label" htmlFor="lembrarSenha">
            Lembrar a senha
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
        <div className="conta-click">
          Já possui conta? <a href="#">Clique aqui</a>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;