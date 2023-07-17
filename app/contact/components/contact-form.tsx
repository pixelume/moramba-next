"use client"

import { Button } from "@/components/ui/button"
import { FormTextInput } from "@/components/form-components/form-text-input"
import { FormWarpper } from "@/components/form-components/form-wrapper"

import { useContactForm } from "./use-contact-form"

export function ContactForm() {
  const { form, onSubmit } = useContactForm()
  const { control } = form

  return (
    <FormWarpper {...{ form, onSubmit }} className="space-y-8">
      <FormTextInput
        control={control}
        name="fullName"
        label="Full Name"
        placeholder="John Doe"
      />
      <FormTextInput
        control={control}
        name="username"
        label="User Name"
        placeholder="User Name"
      />
      <Button type="submit">Submit</Button>
    </FormWarpper>
  )
}
