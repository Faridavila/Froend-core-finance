import React from 'react'
import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'tabla',
    title: 'Tabla',
    icon: <Mail size={20} />,
    navLink: '/tabla'
  },
  {
    id: 'nuevoTREE',
    title: 'arbol',
    icon: <Mail size={20} />,
    navLink: '/nuevoTREE'
  }
]
