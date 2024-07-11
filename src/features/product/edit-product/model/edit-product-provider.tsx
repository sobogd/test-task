import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { TEditProductInput } from "../types";

type EditProductData = {
  input: TEditProductInput | null;
};

const editProductContext = createContext<{
  data: EditProductData;
  setData: Dispatch<SetStateAction<EditProductData>>;
} | null>(null);

export function EditProductProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<EditProductData>({
    input: null,
  });

  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data, setData]
  );

  return (
    <editProductContext.Provider value={value}>
      {children}
    </editProductContext.Provider>
  );
}

export function useEditProduct() {
  const contextData = useContext(editProductContext);
  if (!contextData) {
    throw Error("not provided context");
  }
  const { data, setData } = contextData;

  const updateInput = useCallback((input: TEditProductInput | null) => {
    setData((prev) => {
      return {
        ...prev,
        input: prev.input
          ? {
              ...(prev.input ?? {}),
              ...(input ?? {}),
            }
          : input,
      };
    });
  }, []);

  return {
    data,
    updateInput,
  };
}
