import React from 'react';

// Minimal toaster placeholder.
// To add full toast support, install `sonner` and replace this with:
//   import { Toaster } from 'sonner';
export const Toaster = () => (
  <div
    id="toaster-root"
    aria-live="polite"
    className="fixed bottom-4 right-4 z-50 flex flex-col gap-2"
  />
);
