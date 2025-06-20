"use client";

import { contactSchema } from "@/lib/schema";
import { ContactSchemaType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import HeadingComps from "../HeadingComps";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactsForm = () => {
  const contactForm = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange",
  });

  const handleSubmit = async (fData: ContactSchemaType) => {
    // Delay sending the form data
    await new Promise<void>((resolve) => setTimeout(resolve, 3000));

    if (contactForm.formState.isSubmitSuccessful) {
      toast.success("Successfully sent the message!");

      contactForm.reset();
      console.log(fData);
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="space-y-10">
      <HeadingComps className="text-2xl lg:text-4xl">
        We&apos;re Ready, Let&apos;s Talk.
      </HeadingComps>

      <Form {...contactForm}>
        <form className="space-y-3">
          <FormField
            control={contactForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Full Name"
                    disabled={contactForm.formState.isSubmitting}
                    type="text"
                    // live validation style changes like input border color
                    className={cn(
                      contactForm.formState.dirtyFields.name
                        ? "border-green-500 focus-visible:ring-green-600/20"
                        : "",
                      "font-noto-sans py-6 transition-all duration-300 ease-in-out",
                    )}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your Email"
                    disabled={contactForm.formState.isSubmitting}
                    type="email"
                    // live validation style changes like input border color
                    className={cn(
                      contactForm.formState.dirtyFields.email
                        ? "border-green-500 focus-visible:ring-green-600/20"
                        : "",
                      "font-noto-sans py-6 transition-all duration-300 ease-in-out",
                    )}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={contactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here."
                    disabled={contactForm.formState.isSubmitting}
                    // live validation style changes like input border color
                    className={cn(
                      contactForm.formState.dirtyFields.message
                        ? "border-green-500 focus-visible:ring-green-600/20"
                        : "",
                      "font-noto-sans py-6 transition-all duration-300 ease-in-out",
                    )}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            onClick={contactForm.handleSubmit(handleSubmit)}
            disabled={contactForm.formState.isSubmitting}
            className="bg-primary-crimson hover:bg-primary-crimson-hover font-noto-sans rounded-4xl px-8 py-6">
            {/* show loading spinner when form is submitting  */}

            {contactForm.formState.isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader className="animate-spin" /> Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactsForm;
