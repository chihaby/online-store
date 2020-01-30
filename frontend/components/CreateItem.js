import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ){
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ){
      id
    }
  }
`;

class CreateItem extends Component {
  state={
    title: 'cool shoes',
    description: 'I love those Context',
    image: 'dog.jp',
    largeImage: 'large-dog.jpg',
    price: 5000
  }

  handleChange = event => {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, {loading, error}) => (

      <Form onSubmit={async e => {
        e.preventDefault();
        const res = await createItem();
        console.log(res)
      }}>
        <Error error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor='title'>
            Title
            <input 
              type='text'
              id='title'
              name='title'
              placeholder='Title'
              required
              value={this.state.title}
              onChange={this.handleChange}
              />
          </label>

          <label htmlFor='price'>
            price
            <input 
              type='text'
              id='price'
              name='price'
              placeholder='price'
              required
              value={this.state.price}
              onChange={this.handleChange}
              />
          </label>

          <label htmlFor='description'>
            Description
            <textarea 
              id='description'
              name='description'
              placeholder='Enter a description'
              required
              value={this.state.description}
              onChange={this.handleChange}
              />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </Form>

      )}
    </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };