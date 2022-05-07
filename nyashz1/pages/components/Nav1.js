import React from 'react';
import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';

export default class App extends React.Component {
  render() {
    return (
      <Frame>
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/',
          label: 'Sales',
          icon: HomeMinor,
        },
        {
          url: './components/AddDatel',
          label: 'Orders',
          icon: OrdersMinor,
          badge: '15',
        },
        {
          url: '/path/to/place',
          label: 'Average',
          icon: ProductsMinor,
        },
        {
          url: '/path/to/place',
          label: 'Average',
          icon: ProductsMinor,
        },
      ]}
    />
  </Navigation>
</Frame>
    );
  }
}
