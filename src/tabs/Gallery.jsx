import { Component } from 'react';
import { makeNormalizedDataImg } from 'helpers/normalize-data-img';
import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    searchValue: '',
    photos: [],
    page: 1,
    isVisibleLoadMoreBtn: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.searchValue !== prevState.searchValue ||
      this.state.page !== prevState.page
    ) {
      const { photos, total_results, per_page } = await ImageService.getImages(
        this.state.searchValue,
        this.state.page
      );
      this.setState(prev => ({
        photos: [...prev.photos, ...makeNormalizedDataImg(photos)],
        isVisibleLoadMoreBtn:
          this.state.page < Math.ceil(total_results / per_page),
      }));
    }
  }

  onSubmit = searchValue => {
    this.setState({
      searchValue,
      photos: [],
      page: 1,
      isVisibleLoadMoreBtn: false,
    });
  };

  handleClickOnBtn = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        {this.state.photos.length > 0 && (
          <Grid>
            {this.state.photos.map(({ medium, large, alt, id, avg_color }) => (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={medium} alt={alt} />
                </CardItem>
              </GridItem>
            ))}
          </Grid>
        )}
        {this.state.isVisibleLoadMoreBtn && (
          <Button onClick={this.handleClickOnBtn}>Load more</Button>
        )}

        {this.state.photos.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}
