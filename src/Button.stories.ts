import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'
import {within } from "@testing-library/react"
import {userEvent} from "@storybook/testing-library"



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
  
  

  export const WithinInteraction: Story ={
    args: {
        label: "Click me",
        onClick: async () => alert('Clicked!')
    },
    play: async ({canvasElement}) =>{
        const canvas = within(canvasElement);
        const button = canvas.getByRole("button");
        await userEvent.click(button);
    },
    };
  

  
  
  


