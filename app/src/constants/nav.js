import { BsHouse, BsHeart, BsPlusCircle, BsEnvelope, BsPerson } from 'react-icons/bs'

export const navApp = {
  links: [
    {
      name: 'Inicio',
      path: '/',
      icon: <BsHouse />
    },
    {
      name: 'favoritos',
      path: '/favorite',
      icon: <BsHeart />
    },
    {
      name: 'Súbelo',
      path: '/upload',
      icon: <BsPlusCircle />
    },
    {
      name: 'Buzon',
      path: '/mailbox',
      icon: <BsEnvelope />
    },
    {
      name: 'Tú',
      path: '/you',
      icon: <BsPerson />
    }
  ]
}
