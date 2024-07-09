import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './Components/header'; // Ensure this is correctly imported as a component
import { populateNavList } from './utils';
import { navItems } from './data';

// Select a dedicated container instead of 'body'
const container = document.getElementById('app');
const root = createRoot(container); // Create a root.

// Use the new API to render
root.render(<Header />);

document.addEventListener('DOMContentLoaded', function() {
    populateNavList(navItems);
	
});
