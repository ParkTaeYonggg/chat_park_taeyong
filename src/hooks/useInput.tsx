import React, { useState } from "react";

const useInput = (initial: any) => {
  const [value, setValue] = useState(initial);
  const handleSetValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return [value, handleSetValue];
};

export default useInput;
