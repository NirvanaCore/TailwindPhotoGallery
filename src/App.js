import React, { useState, useEffect } from 'react';
import { ImageCards } from './components/ImageCards';
import { ImageSearch } from './components/ImageSearch';
import '@fortawesome/fontawesome-free/css/all.min.css';

/* `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true` */

function App() {
	const [images, setImages] = useState([]);
	const [isloading, setIsLoading] = useState(true);
	const [term, setTerm] = useState('');

	useEffect(() => {
		fetch(`https://pixabay.com/api/?key=18909034-039500ac26627dcd3fe57a04b&q=${term}&image_type=photo&pretty=true`)
			.then((res) => res.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [term]);

	return (
		<div className='container mx-auto'>
			<ImageSearch searchText={(text) => setTerm(text)} />
			{!isloading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-64'>No Images Found .....</h1>}
			{isloading ? (
				<h1 className='text-8xl text-center mx-auto mt-64'>Loading .....</h1>
			) : (
				<div className='grid grid-cols-3 gap-4'>
					{images.map((img) => (
						<ImageCards key={img.id} image={img} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
