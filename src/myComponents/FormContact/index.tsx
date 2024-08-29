import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, type FC } from "react";
import { Textarea } from "@/components/ui/textarea";
import SendingLoader from "@/myComponents/SendingLoader";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

const FormContact: FC = () => {
  const [sending, setSending] = useState(false);

  const formSchema = z.object({
    username: z.string().min(1, {
      message: "Name is required",
    }),
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email("Email is invalid"),
    subject: z.string().min(1, {
      message: "Subject is required",
    }),
    message: z.string().min(1, {
      message: "Message is required",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setSending(true);
    mutation.mutate(values);
  };

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => {
      return emailjs.send(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        {
          from_name: values.username,
          to_name: "Khoi Dinh",
          from_email: values.email,
          to_email: "khoiyahoo@gmail.com",
          subject: values.subject,
          message: values.message,
        },
        `${process.env.NEXT_PUBLIC_EMAIL_USER_ID}`
      );
    },
    onSuccess: () => {
      form.reset();
      setSending(false);
      toast({
        variant: "success",
        title: "Send message successful !",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Send message fail !",
      });
      setSending(false);
    },
  });
  return (
    <Form {...form}>
      {sending ? (
        <div className="flex justify-center items-center h-[28.125rem]">
          <SendingLoader />
        </div>
      ) : (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="md:w-1/2 w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="!mt-1 w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.6875rem]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:w-1/2 w-full">
                  <FormLabel>Your email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      {...field}
                      className="!mt-1 w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-[0.6875rem]" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} className="!mt-1" />
                </FormControl>
                <FormMessage className="text-[0.6875rem]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="!mt-1 resize-none !h-[9.375rem]"
                  />
                </FormControl>
                <FormMessage className="text-[0.6875rem]" />
              </FormItem>
            )}
          />
          <Button type="submit">Send message</Button>
        </form>
      )}
    </Form>
  );
};

export default FormContact;
