import React from "react";
import { Loader2 } from "lucide-react";

const LoadingState = ({ label = "Loading air quality data..." }) => (
  <div className="card flex min-h-40 items-center justify-center gap-3 p-lg text-on-surface-variant">
    <Loader2 className="h-5 w-5 animate-spin text-primary" />
    <span>{label}</span>
  </div>
);

export default LoadingState;
