import { UiButton, UiButtonProps } from "../../../../shared/buttons/ui-button";

export function RemoveProductButton({ onClick, ...props }: UiButtonProps) {
  return (
    <UiButton onClick={onClick} {...props}>
      Удалить
    </UiButton>
  );
}
