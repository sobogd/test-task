import { useCallback } from "react";
import { useEditProduct } from "../model/edit-product-provider";

export function EditProductForm() {
  const { data, updateInput } = useEditProduct();
  const input = data.input;

  const updateField: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (!input?.id) return;
      const { name, value } = event.target;

      updateInput({
        id: input.id,
        [name]: value,
      });
    },
    [input?.id]
  );

  return (
    <form>
      <input
        name="price"
        type="number"
        value={input?.price ?? ""}
        onChange={updateField}
      />
      <input name="name" value={input?.name ?? ""} onChange={updateField} />
    </form>
  );
}
