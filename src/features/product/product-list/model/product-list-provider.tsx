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
import { TEditProductInput } from "../../edit-product/types";
import { TProductList } from "../types";

type ProductListData = {
  list: TProductList;
};

const productListContext = createContext<{
  data: ProductListData;
  setData: Dispatch<SetStateAction<ProductListData>>;
} | null>(null);

export function ProductListProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ProductListData>({
    list: [
      {
        id: "1",
        name: "EUR",
        price: 100,
      },
      {
        id: "2",
        name: "USD",
        price: 90,
      },
      {
        id: "3",
        name: "RUB",
        price: 20,
      },
    ],
  });

  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data, setData]
  );

  return (
    <productListContext.Provider value={value}>
      {children}
    </productListContext.Provider>
  );
}

export function useProductList() {
  const contextData = useContext(productListContext);
  if (!contextData) {
    throw Error("not provided context");
  }
  const { data, setData } = contextData;

  const updateProduct = useCallback((input: TEditProductInput) => {
    setData((prev) => {
      const updatedList = prev.list.map((product) => {
        if (product.id === input.id) {
          return {
            ...product,
            ...input,
          };
        } else {
          return product;
        }
      });

      return {
        ...prev,
        list: updatedList,
      };
    });
  }, []);

  const removeProduct = useCallback((id: string) => {
    setData((prev) => {
      const updatedList = prev.list.filter((product) => {
        return product.id !== id;
      });

      return {
        ...prev,
        list: updatedList,
      };
    });
  }, []);

  return {
    data,
    updateProduct,
    removeProduct,
  };
}
