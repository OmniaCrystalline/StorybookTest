import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { useState } from 'react';

const meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
        },
        position: {
            control: 'select',
            options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
        },
        duration: {
            control: 'number',
        },
        showCloseButton: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Operation completed successfully!"
                type="success"
                position="bottom-right"
                duration={Infinity}
            />
        </div>
    ),
};

export const ErrorToast: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="An error occurred while performing the operation"
                type="error"
                position="bottom-right"
                duration={Infinity}
            />
        </div>
    ),
};

export const Warning: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Warning! Please check the entered data"
                type="warning"
                position="bottom-right"
                duration={Infinity}
            />
        </div>
    ),
};

export const Info: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Information message"
                type="info"
                position="bottom-right"
                duration={Infinity}
            />
        </div>
    ),
};

export const WithCloseButton: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Message with close button"
                type="info"
                position="bottom-right"
                showCloseButton={true}
                duration={Infinity}
            />
        </div>
    ),
};

export const LongDuration: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Message with long display duration (10 seconds)"
                type="info"
                position="bottom-right"
                duration={10000}
                onClose={() => { }}
            />
        </div>
    ),
};

export const NoAutoDismiss: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Message without auto-dismiss"
                type="info"
                position="bottom-right"
                duration={Infinity}
                showCloseButton={true}
            />
        </div>
    ),
};

export const TopLeftPosition: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Toast in top left corner"
                type="info"
                position="top-left"
                duration={Infinity}
            />
        </div>
    ),
};

export const TopRightPosition: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Toast in top right corner"
                type="success"
                position="top-right"
                duration={Infinity}
            />
        </div>
    ),
};

export const BottomLeftPosition: Story = {
    render: () => (
        <div style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '400px', overflowX: 'hidden' }}>
            <Toast
                message="Toast in bottom left corner"
                type="warning"
                position="bottom-left"
                duration={Infinity}
            />
        </div>
    ),
};

const InteractiveToast = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: '2rem' }}>
            <button onClick={() => setShow(true)}>Show Toast</button>
            {show && (
                <Toast
                    message="Interactive Toast with auto-close"
                    type="success"
                    position="bottom-right"
                    duration={3000}
                    onClose={() => setShow(false)}
                />
            )}
        </div>
    );
};

export const Interactive: Story = {
    render: () => <InteractiveToast />,
};
