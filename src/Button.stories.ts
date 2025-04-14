import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'


const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button', 
    tags: ['autodocs'], 
};
export default meta; 

type Story = StoryObj<typeof Button>; 


export const Primary: Story = {
    args: {
        label: 'Click me', 
        onClick: async () => alert('Clicked!'),
    },
}; 


export const Disabled: Story = {
    args: { 
      label: 'Click me',
      onClick: async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
          alert('Button is enabled again!');
      },
      disabled: false,
    },
  };
  
  
  
  
  
  
  


