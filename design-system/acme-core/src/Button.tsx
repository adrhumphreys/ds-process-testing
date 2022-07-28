import * as React from "react";
import { themeOne, themeTwo } from "@acme/tokens";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const theme = themeTwo;
  return (
    <button style={{ color: theme.primary, background: theme.secondary }}>
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
