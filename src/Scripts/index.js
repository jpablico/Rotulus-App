import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Components/Header'; // Ensure this is correctly imported as a component
import { taskModal, labelModal } from './Components/Modal';
import { navItems } from './Data/data';
import { Main } from './Components/Main';
import { populateNavList } from './Logic/headerlogic';
import { modalButtons, buttonInit } from './Logic/modalButtons'; 
// Select a dedicated container instead of 'body'
const container = document.getElementById('app');
const root = createRoot(container); // Create a root.

// Use the new API to render
root.render(
  <>
    <Header />
    <Main />
  </>
);

taskModal();
labelModal();



document.addEventListener('DOMContentLoaded', function() {
  console.log('Nav and Button initialization');
  populateNavList();
  buttonInit();
    console.log('DOM fully loaded and parsed');
});
