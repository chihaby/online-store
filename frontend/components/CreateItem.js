import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state={
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }

  handleChange = event => {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Form>
        <fieldset>
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

        </fieldset>
        <h2>Sell an Item </h2>        
      </Form>
    );
  }
}

export default CreateItem;