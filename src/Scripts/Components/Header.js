import React from 'react';
import '../../Styles/main.scss';
import portraitJoshP from '../../Assets/portraitJoshP.jpeg';

function Header() {
  return <header id='header-container'>
	<div className='header-account-wrapper'>
		<img src={portraitJoshP} alt='User profile picture' className='header-account-image' />
		<div className='header-account-info'>
			<h2 className='header-account-name'>Josh Pablico</h2>
			<p className='header-account-email'>jbpablico@gmail.com</p>
		</div>
	</div>
	<nav className='nav-container'>
		<button className='nav-button' id='addTaskButton' >Add task</button>
		<ul className='nav-list'>

		</ul>
		<button className='label-button' id='addLabelButton'>Add label</button>
	</nav>
  </header>;
}


export { Header };
