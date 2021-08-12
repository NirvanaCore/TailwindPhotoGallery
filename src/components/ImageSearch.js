import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const ImageSearch = ({ searchText }) => {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		searchText(text);
	};

	return (
		<div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
			<form onSubmit={onSubmit} className='w-full max-w-sm'>
				<div className='flex items-center border-b border-b-2 border-gray-500 py-2'>
					<input
						onChange={(e) => {
							setText(e.target.value);
						}}
						className='focus:border-none focus:ring-none focus:ring-none focus:outline-none w-full text-sm text-black placeholder-gray-500 border-none rounded-md py-2 pl-10'
						type='text'
						placeholder='Search Image term....'
					/>
					<button
						className='flex-shrink-0 bg-transparent border-none focus:outline-none text-lg text-gray py-2 px-4 rounded-full hover:bg-gray-600 hover:text-white'
						type='submit'>
						<svg
							class='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
};
