import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Components/Header'; // Ensure this is correctly imported as a component
import Main  from './Components/main';
import { taskModal, labelModal } from './Components/Modal';
import { populateNavList } from './utils';
import { navItems } from './data';
import { initializeButtons } from './logic';

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
    populateNavList(navItems);
    initializeButtons();
});
