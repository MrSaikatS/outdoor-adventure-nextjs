"use client";

import { useForm } from "react-hook-form";
import HeadingComps from "../HeadingComps";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/schema";

const ContactsForm = () => {
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
  });

  return (
    <>
      <div className="">
        <HeadingComps className="text-2xl lg:text-4xl">
          We&apos;re Ready, Let&apos;s Talk.
        </HeadingComps>

        <Form {...contactForm}>
          <FormField
            control={contactForm.control}
            name="name"
            render={(field) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Name"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </div>
    </>
  );
};

export default ContactsForm;
