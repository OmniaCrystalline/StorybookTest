import { InputHTMLAttributes, useState, useEffect } from 'react';
import './Input.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    clearable?: boolean;
    type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url' | 'search';
}

export const Input = ({
    label,
    error,
    className = '',
    type = 'text',
    clearable = false,
    value,
    onChange,
    ...props
}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    useEffect(() => {
        if (isControlled && value !== undefined) {
            setInternalValue(value);
        }
    }, [value, isControlled]);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const hasValue = String(currentValue || '').length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setInternalValue(e.target.value);
        }
        if (onChange) {
            onChange(e);
        }
    };

    const handleClear = () => {
        if (!isControlled) {
            setInternalValue('');
        }
        if (onChange) {
            const syntheticEvent = {
                target: { value: '' },
                currentTarget: { value: '' },
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(syntheticEvent);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <div className="input-container">
                <input
                    className={`input ${error ? 'input-error' : ''}`}
                    type={inputType}
                    value={currentValue}
                    onChange={handleChange}
                    {...props}
                />
                <div className="input-actions">
                    {isPassword && (
                        <button
                            type="button"
                            className="input-action-button"
                            onClick={togglePasswordVisibility}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </button>
                    )}
                    {clearable && hasValue && (
                        <button
                            type="button"
                            className="input-action-button"
                            onClick={handleClear}
                            aria-label="Clear"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>
            {error && <span className="input-error-message">{error}</span>}
        </div>
    );
};

