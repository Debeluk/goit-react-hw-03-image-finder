import React, { useState, useEffect } from 'react';
import Searchbar from './SearchBar/Search';
import ImageGallery from './ImageGallery/ImageGall';
import Button from './LoadMoreBtn/Button';
import Loader from './Loader/Load';
import Modal from './ScalePhoto/Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=40334609-b80ca2dc1b64dcae4aab10255&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalImages(data.totalHits);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, currentPage]);

  const handleSearchSubmit = query => {
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
    setTotalImages(0);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && images.length < totalImages && !isLoading && (
        <Button onClick={handleLoadMore} />
      )}
      {modalImage && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
