import React from 'react'
import { Outlet } from 'react-router';
import Footer from './../footer/Footer';
import Navbar from '../navbarf/NavbarF';

export default function Layout() {
  return <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}
