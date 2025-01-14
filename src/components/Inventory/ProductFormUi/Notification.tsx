import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Close notification after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="top-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
      <span>{message}</span>
      <button
        className="ml-4 text-lg font-bold"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
