import { DetailedHTMLProps, FormHTMLAttributes } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"

import { Form } from "@/components/ui/form"

interface FormWarpperProps<T extends FieldValues>
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  form: UseFormReturn<T>
  children: React.ReactNode
}

export const FormWarpper = <T extends FieldValues>({ form, children, onSubmit, ...rest }: FormWarpperProps<T>) => {
  return (
    <Form {...form}>
      <form onSubmit={(e) => {e.preventDefault(); onSubmit?.(e)}}{...rest}>
        {children}
      </form>
    </Form>
  )
}
