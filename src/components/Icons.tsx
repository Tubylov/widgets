import React from 'react';

interface WidgetProps {
    name: string;
}

const Widget: React.FC<WidgetProps> = ({name}) => {

    const getIcon = () => {

        switch(name) {
            case 'close':
                return <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18"
                    >
                    <path
                    stroke="#2ca58d"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 1L1 16.2M1 1l16 15.2"
                    ></path>
                </svg>
            case 'settings':
                return <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="800"
                    fill="none"
                    viewBox="0 0 24 24"
                    >
                    <path
                    fill="#2ca58d"
                    fillRule="evenodd"
                    d="M12.785.45c1.039 0 1.932.715 2.127 1.705l.087.44c.342 1.73 2.187 2.762 3.903 2.184l.436-.147c.982-.33 2.067.062 2.587.934l.785 1.318c.52.872.326 1.98-.46 2.639l-.35.293a2.83 2.83 0 000 4.368l.35.293c.787.66.98 1.767.46 2.64l-.785 1.317c-.52.872-1.605 1.264-2.587.934l-.436-.147c-1.716-.578-3.561.454-3.903 2.184l-.087.44c-.195.99-1.088 1.705-2.127 1.705h-1.57c-1.039 0-1.932-.716-2.127-1.705L9 21.405c-.342-1.73-2.187-2.762-3.903-2.184l-.436.146c-.982.331-2.067-.06-2.587-.933l-.785-1.318a2.055 2.055 0 01.46-2.639l.35-.293a2.83 2.83 0 000-4.368l-.35-.293a2.055 2.055 0 01-.46-2.64l.785-1.317c.52-.872 1.605-1.264 2.587-.934l.436.147c1.716.578 3.561-.455 3.903-2.184l.087-.44C9.283 1.165 10.176.45 11.215.45h1.57zM12 15.3a3.3 3.3 0 100-6.6 3.3 3.3 0 000 6.6z"
                    clipRule="evenodd"
                    ></path>
                </svg>
            case 'loader':
                return <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800"
                    height="800"
                    fill="#fff"
                    version="1.1"
                    viewBox="0 0 26.349 26.35"
                    xmlSpace="preserve"
                    >
                    <circle cx="13.792" cy="3.082" r="3.082"></circle>
                    <circle cx="13.792" cy="24.501" r="1.849"></circle>
                    <circle cx="6.219" cy="6.218" r="2.774"></circle>
                    <circle cx="21.365" cy="21.363" r="1.541"></circle>
                    <circle cx="3.082" cy="13.792" r="2.465"></circle>
                    <circle cx="24.501" cy="13.791" r="1.232"></circle>
                    <path d="M4.694 19.84a2.155 2.155 0 000 3.05 2.155 2.155 0 003.05 0 2.155 2.155 0 000-3.05 2.146 2.146 0 00-3.05 0z"></path>
                    <circle cx="21.364" cy="6.218" r="0.924"></circle>
                </svg>
            default:
                return null
        }

    }

    return (
        <>
            { getIcon() }
        </>
    );
}

export default Widget;
