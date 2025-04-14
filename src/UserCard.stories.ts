import { StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { Meta } from "@storybook/react";

const meta: Meta<typeof UserCard> = {
    title: 'Components/UserCard',
    component: UserCard,
    tags: ['autodocs'],
  };
  
  export default meta;

type Story = StoryObj<typeof UserCard>


export const Default: Story = {
    args: {
        name: "Mario Rossi",
        email: "mariorossi@gmail.com"
    }
};


export const NoName: Story = {
    args: {
        name: "",
        email: "mariorossi@gmail.com",
    }
};

export const ConfermaUtenteIinterazione: Story = {
    args: {
      name: "Mario Rossi",
      email: "mariorossi@example.com",
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const button = await canvas.findByRole("button", { name: /conferma/i });
      await userEvent.click(button);
      await canvas.findByText("Utente Confermato"); 
    },
  };
