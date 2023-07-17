import React, { ReactNode } from 'react';
import './ModalBox.css';

interface ModalBoxProps {
    children: ReactNode
}

const ModalBox: React.FC<ModalBoxProps> = ({children}) => {
    return (
        <div className="ModalBox">
            {children}
        </div>
    );
}

export default ModalBox;
