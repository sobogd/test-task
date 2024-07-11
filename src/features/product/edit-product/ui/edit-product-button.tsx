import { UiButton, UiButtonProps } from "../../../../shared/buttons/ui-button";

export function EditProductButton({
  isEditing,
  startEdit,
  endEdit,
  ...props
}: UiButtonProps & {
  isEditing: boolean;
  startEdit: () => void;
  endEdit: () => void;
}) {
  return (
    <UiButton onClick={isEditing ? endEdit : startEdit} {...props}>
      {isEditing ? "Сохранить" : "Редактировать"}
    </UiButton>
  );
}
