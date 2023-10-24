import { ChangeEvent, useState } from "react";
import { Path } from "react-hook-form";
import { useSearchParams } from "@utils/hooks";
import sp from "@configs/searchParams";
import { Select } from "@components/form";

const { page } = sp;

interface Props<T extends object> {
  options: Option[];
  isLoading: boolean;
  name: Path<T>;
  label: string;
  defaultValue?: string;
}

export function SelectFilter<T extends object>({
  isLoading,
  name,
  defaultValue,
  options,
}: Props<T>) {
  const { searchParams, setSearchParams, getSearchParam } = useSearchParams();
  const [key, setKey] = useState<string>(getSearchParam(name, defaultValue).toString());

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const isEmpty = value.length === 0;

    isEmpty ? searchParams.delete(name) : searchParams.set(name, value);
    searchParams.set(page.query, page.default);
    setSearchParams(searchParams);
    setKey(value);
  };
  return (
    <div className="flex justify-center w-full max-w-[130px]">
      <Select
        className="max-w-[130px]"
        disabled={isLoading}
        name={name}
        value={key}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}
