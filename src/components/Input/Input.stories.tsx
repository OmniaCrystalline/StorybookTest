import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'password', 'number', 'email', 'tel', 'url', 'search'],
        },
        clearable: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples according to requirements
export const Text: Story = {
    args: {
        label: 'Text',
        placeholder: 'Enter text...',
        type: 'text',
        clearable: false,
    },
};

export const TextWithClearable: Story = {
    args: {
        label: 'Text with clear',
        placeholder: 'Enter text...',
        type: 'text',
        clearable: true,
    },
};

export const Password: Story = {
    args: {
        label: 'Password (with eye icon)',
        placeholder: 'Enter password',
        type: 'password',
        clearable: false,
    },
};

export const PasswordWithClearable: Story = {
    args: {
        label: 'Password with clear',
        placeholder: 'Enter password',
        type: 'password',
        clearable: true,
    },
};

export const Number: Story = {
    args: {
        label: 'Number',
        placeholder: 'Enter number',
        type: 'number',
        clearable: false,
    },
};

export const NumberWithClearable: Story = {
    args: {
        label: 'Number with clear',
        placeholder: 'Enter number',
        type: 'number',
        clearable: true,
    },
};

// Additional examples
export const WithLabel: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter username',
        type: 'text',
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter email',
        type: 'email',
        error: 'Invalid email format',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled field',
        placeholder: 'Unavailable',
        disabled: true,
    },
};

