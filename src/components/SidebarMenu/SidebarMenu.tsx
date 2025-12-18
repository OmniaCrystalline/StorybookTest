import { useState } from 'react';
import './SidebarMenu.css';

export interface MenuItem {
    id: string;
    label: string;
    icon?: string;
    onClick?: () => void;
    children?: MenuItem[];
}

interface SidebarMenuProps {
    items: MenuItem[];
    defaultSelected?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const SidebarMenu = ({
    items,
    defaultSelected,
    isOpen = true,
    onClose
}: SidebarMenuProps) => {
    const [selectedId, setSelectedId] = useState<string | undefined>(defaultSelected);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const handleItemClick = (item: MenuItem, event?: React.MouseEvent) => {
        if (item.children && item.children.length > 0) {
            event?.stopPropagation();
            const newExpanded = new Set(expandedItems);
            if (newExpanded.has(item.id)) {
                newExpanded.delete(item.id);
            } else {
                newExpanded.add(item.id);
            }
            setExpandedItems(newExpanded);
        } else {
            setSelectedId(item.id);
            if (item.onClick) {
                item.onClick();
            }
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };

    const renderMenuItem = (item: MenuItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.has(item.id);
        const isSelected = selectedId === item.id;

        return (
            <li key={item.id} className="sidebar-menu-item">
                <button
                    className={`sidebar-menu-button ${isSelected ? 'active' : ''} level-${level}`}
                    onClick={(e) => handleItemClick(item, e)}
                >
                    {item.icon && <span className="sidebar-menu-icon">{item.icon}</span>}
                    <span className="sidebar-menu-label">{item.label}</span>
                    {hasChildren && (
                        <span className={`sidebar-menu-arrow ${isExpanded ? 'expanded' : ''}`}>
                            ▶
                        </span>
                    )}
                </button>
                {hasChildren && isExpanded && (
                    <ul className="sidebar-menu-sublist">
                        {item.children!.map((child) => renderMenuItem(child, level + 1))}
                    </ul>
                )}
            </li>
        );
    };

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="sidebar-menu-backdrop"
                onClick={handleBackdropClick}
                aria-hidden="true"
            />
            <nav className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
                <ul className="sidebar-menu-list">
                    {items.map((item) => renderMenuItem(item))}
                </ul>
            </nav>
        </>
    );
};

