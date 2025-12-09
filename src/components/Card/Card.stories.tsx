import type { StoryObj, Meta} from "@storybook/react-vite";
import Card from "./Card";
import Weather from "./Weather/Weather";
import Activity from "./Activity/Activity";
import Focus from "./Focus/Focus";
import Tasks from "./Tasks/Tasks";
import Notes from "./Notes/Notes";
import Time from "./Time/Time";
import DateComponent from "./Time/Date";

const meta : Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Focus',
        children: <p>Card Content</p>,
    },
};

export const WeatherCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Weather',
        children: <Weather />,
    },
};

export const ActivityCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Activity',
        children: <Activity />,
    },
};

export const FocusCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Focus',
        children: <Focus />,
    },
};

export const TasksCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Tasks',
        children: <Tasks />,
    },
};

export const NotesCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Notes',
        children: <Notes />,
    },
};

export const TimeCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Time',
        children: <Time />,
    },
};

export const DateCard: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Time',
        children: <DateComponent />,
    },
};