import { useEffect, useState, useCallback } from 'react';
import './Toast.css';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
    showCloseButton?: boolean;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export const Toast = ({
    message,
    type = 'info',
    duration = 3000,
    onClose,
    showCloseButton = false,
    position = 'bottom-right',
}: ToastProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    const handleClose = useCallback(() => {
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
            if (onClose) {
                onClose();
            }
        }, 300);
    }, [onClose]);

    useEffect(() => {
        if (duration > 0 && duration !== Infinity) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, handleClose]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`toast-container toast-${position}`}>
            <div className={`toast toast-${type} ${isExiting ? 'toast-exit' : 'toast-enter'}`}>
                <span className="toast-message">{message}</span>
                {showCloseButton && (
                    <button
                        className="toast-close-button"
                        onClick={handleClose}
                        aria-label="Close"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    );
};

