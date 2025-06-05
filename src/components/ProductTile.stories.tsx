import type { Meta, StoryObj } from '@storybook/react';
import ProductTile from './ProductTile';

const meta: Meta<typeof ProductTile> = {
  title: 'Components/ProductTile',
  component: ProductTile,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
    title: { control: 'text' },
    price: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Awesome Gadget Pro',
    price: '$99.99',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Product+Image',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Basic Widget',
    price: '$29.50',
    imageUrl: '', // or undefined
  },
};

export const LongTitle: Story = {
    args: {
      title: 'This is a Super Extra Long Product Title That Will Definitely Wrap to Multiple Lines',
      price: '$1234.56',
      imageUrl: 'https://via.placeholder.com/300x200.png?text=Long+Title',
    },
  }; 