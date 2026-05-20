import React from "react";
import { AlertCircle } from "lucide-react";

const ErrorState = ({ message = "Unable to fetch air quality data. Please check your connection or try again." }) => (
  <div className="card flex min-h-40 items-center gap-4 border-error/30 bg-error-container/25 p-lg text-on-error-container">
    <AlertCircle className="h-6 w-6 shrink-0" />
    <p className="font-medium">{message}</p>
  </div>
);

export default ErrorState;
