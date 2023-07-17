import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input, InputProps } from "../ui/input"
import { Control, FieldValues, Path } from "react-hook-form";

interface FormTextInputProps<T extends FieldValues> extends InputProps {
  control?: Control<T> | undefined;
  name: Path<T>;
  label: string;
  placeholder?: string;
  description?: string;
}

export const FormTextInput = <T extends FieldValues>({control, name, label = name, placeholder = label, description, ...inputProps}: FormTextInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} {...inputProps} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
