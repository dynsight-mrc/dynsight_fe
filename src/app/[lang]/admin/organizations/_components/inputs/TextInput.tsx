import React from "react";
import { useFormContext } from "react-hook-form";
function getValueByKeys(obj: any, keys: string[]): any {
  return keys.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
}

function TextInput({
  title,
  registerKey,
  type,
  validations,
}: {
  title: string;
  type?: string;
  registerKey: string;
  validations: Record<string, unknown>;
}) {
  const {
    register,
    formState:{errors}
  } = useFormContext();

  

  return (
    <div className="flex flex-col space-y-1 mb-3">
      <label htmlFor="" className="pl-1">
        {title}
      </label>
      <input
        {...register(registerKey, { ...validations })}
        type={type}
        className={`p-2 ${
          getValueByKeys(errors,registerKey.split("."))
            ? "border-red-600 focus:border focus:text-red-600 focus:border-red-600"
            : "focus:border focus:text-teltonika-800 focus:border-teltonika-800"
        } bg-gray-100 outline-none text-gray-500  border border-transparent rounded-md`}
      />
      {getValueByKeys(errors,registerKey.split(".")) && (
        <p className="pl-1 text-sm text-red-600">
          {getValueByKeys(errors,registerKey.split(".")).message?.toString()}
        </p>
      )}
    </div>
  );
}

export default TextInput;
