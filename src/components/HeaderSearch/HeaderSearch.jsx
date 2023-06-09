import './index.scss'
import React from 'react'
import dncIcon from "../../assets/dnc-logo.svg"
import cartIcon from "../../assets/cart.svg"
import Modal from '../Modal/Modal'
import {useState} from 'react'


function HeaderSearch() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <header>
      <div className="header-search">
        <img src={dncIcon} alt="logo" className="header-search__logo"/>
        <div className="header-search__input">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="46" width="46"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path></svg>
          <input type="text" placeholder="O que você está procurando?" />
        </div>
        <img src={cartIcon} alt="cart icon" className="header-search__cart"/>    
      </div>
      <div className="header-nav">
        <ul>
          <li>Novidades</li>
          <li>Jogos</li>
          <li>Video Games</li>
          <li>Mesas Gamer</li>
          <li>Promoções</li>
          <li onClick={() => setOpenModal(true)} >Atendimento</li>
        </ul>
      </div>
      <Modal open={openModal} onClose={()=> setOpenModal(false)} />
    </header>
  )
}

export default HeaderSearch