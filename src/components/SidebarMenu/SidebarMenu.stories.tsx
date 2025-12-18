import type { Meta, StoryObj } from '@storybook/react';
import { SidebarMenu } from './SidebarMenu';
import type { MenuItem } from './SidebarMenu';
import { useState } from 'react';

const meta = {
    title: 'Components/SidebarMenu',
    component: SidebarMenu,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems: MenuItem[] = [
    { id: '1', label: 'Home', icon: '🏠' },
    { id: '2', label: 'Profile', icon: '👤' },
    { id: '3', label: 'Settings', icon: '⚙️' },
    { id: '4', label: 'Help', icon: '❓' },
];

const nestedItems: MenuItem[] = [
    {
        id: '1',
        label: 'Home',
        icon: '🏠',
        children: [
            { id: '1-1', label: 'Dashboard' },
            { id: '1-2', label: 'Analytics' },
        ]
    },
    {
        id: '2',
        label: 'Profile',
        icon: '👤',
        children: [
            { id: '2-1', label: 'Personal Data' },
            { id: '2-2', label: 'Security' },
            { id: '2-3', label: 'Subscriptions' },
        ]
    },
    {
        id: '3',
        label: 'Settings',
        icon: '⚙️',
        children: [
            {
                id: '3-1',
                label: 'General',
                children: [
                    { id: '3-1-1', label: 'Language' },
                    { id: '3-1-2', label: 'Theme' },
                ]
            },
            { id: '3-2', label: 'Notifications' },
        ]
    },
    { id: '4', label: 'Help', icon: '❓' },
];

export const Default: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '700px', minHeight: '700px', overflowX: 'hidden' }}>
            <SidebarMenu
                items={defaultItems}
                isOpen={true}
            />
        </div>
    ),
};

export const ClosedState: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '700px', minHeight: '700px', overflowX: 'hidden' }}>
            <SidebarMenu
                items={defaultItems}
                isOpen={false}
            />
        </div>
    ),
};

export const WithSelected: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '700px', minHeight: '700px', overflowX: 'hidden' }}>
            <SidebarMenu
                items={defaultItems}
                defaultSelected="2"
                isOpen={true}
            />
        </div>
    ),
};

export const WithNestedMenu: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '700px', minHeight: '700px', overflowX: 'hidden' }}>
            <SidebarMenu
                items={nestedItems}
                isOpen={true}
            />
        </div>
    ),
};

const InteractiveSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'relative', width: '100%', height: '700px', minHeight: '700px', padding: '2rem', overflowX: 'hidden' }}>
            <button onClick={() => setIsOpen(true)}>Open Menu</button>
            <SidebarMenu
                items={nestedItems}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};

export const Interactive: Story = {
    render: () => <InteractiveSidebar />,
};

