import React, { useState, useEffect } from 'react';
import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import { ImgModal } from 'components/Modal/Modal';

export const Gallery = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisibleLoadMoreBtn, setIsVisibleLoadMoreBtn] = useState(false);
  const [large, setLarge] = useState('');
  const [alt, setAlt] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmitClick = searchValue => {
    setSearchValue(searchValue);
    setPage(1);
    setImages([]);
    setIsVisibleLoadMoreBtn(false);
  };
  const onModalClose = () => {
    setIsOpenModal(false);
  };
  const onModalOpen = (alt, large) => {
    setIsOpenModal(true);
    setAlt(alt);
    setLarge(large);
  };
  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };
  useEffect(() => {
    const getImagesByQuery = async () => {
      const { photos, total_results } = await ImageService.getImages(
        searchValue,
        page
      );
      setImages(prevState => [...prevState, ...photos]);
      setIsVisibleLoadMoreBtn(page < Math.ceil(total_results / photos.length));
      console.log(photos, total_results);
    };
    getImagesByQuery();
  }, [searchValue, page]);
  return (
    <>
      <SearchForm onSubmit={onSubmitClick} />
      <Grid>
        {Array.isArray(images) &&
          images.map(({ id, alt, avg_color, src: { medium, large } }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img
                  src={medium}
                  alt={alt}
                  onClick={() => {
                    onModalOpen(alt, large);
                  }}
                />
              </CardItem>
            </GridItem>
          ))}
      </Grid>
      {isVisibleLoadMoreBtn === true && (
        <Button onClick={onLoadMoreClick}>Load more</Button>
      )}
      {images.length === 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}

      {isOpenModal === true && (
        <ImgModal
          alt={alt}
          src={large}
          onModalClose={onModalClose}
          isShowModal={isOpenModal}
        />
      )}
      {/* <Modal alt={alt} src={large} onModalClose={onModalClose} /> */}
    </>
  );
};
