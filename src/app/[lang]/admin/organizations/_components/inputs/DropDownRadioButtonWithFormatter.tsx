import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
function getValueByKeys(obj: any, keys: string[]): any {
  return keys.reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
    obj
  );
}

function DropDownRadioButtonsWithFormatter({
  title,
  registerKey,
  options,
  formater,
  validations,
}: {
  title: string;
  registerKey: string;
  validations: Record<string, unknown>;
  formater: (data: any) => { label: number; value: string }[] | undefined;
  options: { label: number; value: string }[] | undefined;
}) {
  console.log(options);
  
  const {
    register,
    formState: { errors },
    getValues,
    watch,
  } = useFormContext();
  const [menuState, setMenuState] = useState(false);
  const typesMenuRef = useRef<HTMLDivElement>(null);
  const handleOpenDropDownMenu = () => {
    setMenuState(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typesMenuRef.current &&
        !typesMenuRef.current.contains(event.target as Node)
      ) {
        setMenuState(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const field = watch(registerKey);

  useEffect(() => {
    if (field) {
      setTimeout(() => {
        setMenuState((preValue) => !preValue);
      }, 200);
    }
  }, [field]);
  
  
  return (
    <div className="flex flex-col space-y-1 mb-3">
      <label htmlFor="" className="pl-1">
        {title}
      </label>
      <div ref={typesMenuRef} className="relative">
        <div
          onClick={handleOpenDropDownMenu}
          className={`p-2 h-10 ${
            getValueByKeys(errors, registerKey.split("."))
              ? "border-red-600 focus:border focus:text-red-600 focus:border-red-600"
              : "focus:border focus:text-teltonika-800 focus:border-teltonika-800"
          } ${
            menuState ? "rounded-t-md" : "rounded-md"
          } bg-gray-100 outline-none text-gray-500  border border-transparent `}
        >
          {formater(options)
            ? formater(options)?.find(
                (option) => option.value === getValues(registerKey)
              )?.label
            : ""}
        </div>
        <div
          className={`${
            menuState ? "inline-block" : "hidden"
          } absolute z-20 bg-white top-19 rounded-b-md overflow-hidden border border-gray-200 w-full`}
        >
          {formater(options) &&
            formater(options)!.map((radio) => (
              <div
                key={radio.value}
                className="py-2 px-3 space-x-3 bg-white border-b border-gray-200"
              >
                <input
                  {...register(registerKey, { ...validations })}
                  type="radio"
                  name={registerKey}
                  id={radio.value}
                  value={radio.value}
                />
                <label htmlFor={radio.value}>{radio.label}</label>
              </div>
            ))}
        </div>
      </div>
      {getValueByKeys(errors, registerKey.split(".")) && (
        <p className="pl-1 text-sm text-red-600">
          {getValueByKeys(errors, registerKey.split("."))?.message?.toString()}{" "}
        </p>
      )}
    </div>
  );
}

export default DropDownRadioButtonsWithFormatter;
