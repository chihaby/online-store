import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';


class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        <Title>
          <Link href={{
            pathname: '/item',
            query: { id: item.id }
          }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <Title>{item.title}</Title>
      </ItemStyles>
    );
  }
}

export default Item;