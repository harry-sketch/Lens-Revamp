"use client";

import { Toaster } from "react-hot-toast";

const Toast = () => (
  <Toaster
    position="bottom-right"
    reverseOrder
    gutter={8}
    toastOptions={{
      success: {},
      error: {},
      loading: {},
      custom: {},
    }}
  />
);

export default Toast;
