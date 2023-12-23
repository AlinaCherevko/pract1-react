import { Component } from 'react';
import { makeNormalizedDataImg } from 'helpers/normalize-data-img';
import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    searchValue: '',
    photos: [],
  };

  async componentDidUpdate(_, prevState) {
    if (this.state.searchValue !== prevState.searchValue) {
      const { photos } = await ImageService.getImages(this.state.searchValue);
      this.setState({ photos: makeNormalizedDataImg(photos) });
    }
  }

  onSubmit = searchValue => {
    this.setState({ searchValue });
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
        <Button>Load more</Button>

        {this.state.photos.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}
