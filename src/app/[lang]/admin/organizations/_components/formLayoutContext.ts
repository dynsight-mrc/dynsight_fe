import { createContext, useContext } from "react";

type FormLayoutContextType = {
  formsIds: string[];
  style?: string;
  removeFormId: Function;
};

export const FormLayoutContext = createContext<
  FormLayoutContextType | undefined
>(undefined);

export function useFormLayoutContext() {
  const context = useContext(FormLayoutContext);
  return context
}
