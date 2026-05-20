import React from "react";
import { Database } from "lucide-react";

const EmptyState = ({ message = "No records found." }) => (
  <div className="card flex min-h-40 flex-col items-center justify-center gap-3 p-lg text-center text-on-surface-variant">
    <Database className="h-8 w-8 text-outline" />
    <p className="font-medium">{message}</p>
  </div>
);

export default EmptyState;
