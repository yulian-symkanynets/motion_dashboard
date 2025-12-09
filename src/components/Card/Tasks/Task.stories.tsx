import type { Meta, StoryObj } from "@storybook/react-vite";
import Task from "./Task";

const meta: Meta<typeof Task> = {
    title: 'Components/Card/Tasks/Task',
    component: Task,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Default: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Sample Task',
    },
};