import { useState, useEffect } from 'react';
import { FaSync, FaTimes } from 'react-icons/fa';
import { useRegisterSW } from 'virtual:pwa-register/react';

const PWAUpdateNotification = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ', r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  const handleDismiss = () => {
    setNeedRefresh(false);
  };

  if (!needRefresh) return null;

  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl border-2 border-green-500 p-4 z-50 max-w-sm animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-green-100 rounded-full">
          <FaSync className="text-green-600 text-xl" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">Update Tersedia</h3>
          <p className="text-sm text-gray-600 mb-3">
            Versi baru dari aplikasi telah tersedia. Refresh untuk mendapatkan fitur terbaru.
          </p>

          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors"
            >
              Update Sekarang
            </button>
            <button
              onClick={handleDismiss}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAUpdateNotification;
