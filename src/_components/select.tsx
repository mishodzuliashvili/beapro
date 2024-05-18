import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from "react-select/async-creatable";

type Option = { value: string; label: string };

type SelectProps = {
  placeholder?: string;
  isMulti?: boolean;
  isCreatable?: boolean;
  defaultOptions?: Option[];
  onValueChange: (value: Option[]) => void;
  loadOptions?: (
    inputValue: string,
    callback: (options: Option[]) => void
  ) => Promise<Option[]>;
};

export default function Select({
  isMulti,
  isCreatable,
  loadOptions,
  defaultOptions,
  onValueChange,
  placeholder,
}: SelectProps) {
  const Compo = isCreatable ? AsyncCreatableSelect : AsyncSelect;

  if (!loadOptions) {
    loadOptions = async (inputValue: string) => {
      const result = defaultOptions?.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      return result ?? [];
    };
  }

  return (
    <Compo
      onChange={(newValue) => {
        if (!onValueChange) return;
        if (isMulti) {
          // @ts-ignore
          onValueChange(newValue);
        } else {
          // @ts-ignore
          onValueChange(newValue ? [newValue] : []);
        }
      }}
      className=""
      styles={{
        control: (provided) => ({
          ...provided,
          padding: "0",
          borderRadius: "var(--nextui-radius-large)",
          borderColor: "hsl(var(--nextui-border))",
          fontSize: "0.875rem",
          color: "hsl(var(--foreground))",
          ":hover": {
            borderColor: "hsl(var(--border))",
          },
          boxShadow: "none",
        }),
        valueContainer: (provided) => ({
          ...provided,
          padding: "0.5rem",
          color: "hsl(var(--nextui-default-foreground))",
        }),
        multiValue: (provided) => ({
          ...provided,
          fontSize: "1rem",
          backgroundColor: "hsl(var(--nextui-foreground))",
          // borderRadius: "var(--radius)",
        }),
        menu: (provided) => ({
          ...provided,
          borderRadius: "var(--radius)",
          padding: "0.2rem 0.3rem",
          boxShadow: "0 0 0 1px hsl(var(--border))",
        }),
        menuList: (provided) => ({
          ...provided,
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }),
        option: (provided, props) => ({
          ...provided,
          padding: "0.4rem 0.5rem",
          cursor: "pointer",
          borderRadius: "var(--radius)",
          backgroundColor: props.isFocused
            ? "hsl(var(--muted))"
            : "hsl(var(--background))",
          fontSize: "0.875rem",
          ":hover": {
            backgroundColor: "hsl(var(--muted))",
          },
        }),
        noOptionsMessage: (provided) => ({
          ...provided,
          color: "hsl(var(--foreground))",
        }),
      }}
      noOptionsMessage={() => "არ მოიძებნა"}
      loadingMessage={() => "იტვირთება..."}
      placeholder={placeholder}
      cacheOptions
      isMulti={isMulti}
      defaultOptions={defaultOptions}
      loadOptions={loadOptions}
    />
  );
}
