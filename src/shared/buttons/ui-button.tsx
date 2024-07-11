import { ButtonHTMLAttributes } from "react";

export type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton(props: UiButtonProps) {
  return <button {...props} />;
}
