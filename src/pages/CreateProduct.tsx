import { FormEvent, useState } from 'react';
import { createBrowserHistory } from 'history';

import api from '../services/api';

import SideBar from "../components/SideBar";
import '../styles/pages/CreateProduct.css';
import ButtonGoBack from '../components/ButtonGoBack';

export default function CreateProduct() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [user_id, setUser_id] = useState('');

  const history = createBrowserHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', String(name));
    data.append('quantity', String(quantity));
    data.append('price', String(price));
    data.append('user_id', String(user_id));

    await api.post('criar-produto', data);
    history.goBack();
  }


  return (
    <div className='create-product-container'>
      <SideBar />
      
      <div className='create-product-card'>
        <div className='create-product-title' >
          <ButtonGoBack />
          <h1>Cadastrar novo produto</h1>
        </div>
        <div className='create-product-inputs'>
          <form onSubmit={handleSubmit}>
            <input 
            value={name}
            onChange={e => setName(e.target.value)} id='name' type="text"
            placeholder='Nome do produto' required />
            <input 
            value={quantity}
            onChange={e => setQuantity(e.target.value)} id='quantity' type="number" placeholder='Quantidade' min='0' required />
            <input 
            value={price}
            onChange={e => setPrice(e.target.value)} id='price' step="any" type="number" placeholder='Preço' min='0' required />
             <input 
            value={user_id}
            onChange={e => setUser_id(e.target.value)} id='user_id' step="any" type="text" placeholder='ID de Usuário' min='0' required />
           
            <br/>
            <br/>
            <button type="submit" className="register-product-button" >Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}