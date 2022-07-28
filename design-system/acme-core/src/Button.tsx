import * as React from "react";
import { themeOne, themeTwo } from "@acme/tokens";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const theme = themeOne;
  return (
    <button style={{ color: theme.primary, background: "rebeccapurple" }}>
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
