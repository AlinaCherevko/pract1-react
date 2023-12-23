import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    searchValue: '',
  };

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };
  render() {
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <Grid>
          <GridItem>
            <CardItem />
          </GridItem>
        </Grid>
        <Button>Load more</Button>

        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
