import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api';

import '../styles/components/TopBar.css';

interface ProfileParams {
  username: string,
}

export default function TopBar() {
  const params = useParams<ProfileParams>();

  useEffect(() => {
    api.get(`/${params.username}/estoque`);
  }, [params.username]);

  return (
    <div className='topbar-container'>
      <div className='topbar-title'>
        <h1>Bem-vindo, <strong>{params.username}</strong>!</h1>
      </div>

      <div className='topbar-buttons'>
        <Link to='/criar-produto' className='register-product-button'>Cadastrar novo produto</Link>
      </div>
    </div>
  );
}