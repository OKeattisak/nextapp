"use client";
import { Button, Code, TextInput } from "@mantine/core";
import { Input } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Login() {

  const form = useForm({
    mode: "controlled",
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          placeholder="Email"
          mt={20}
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <Input
          placeholder="Password"
          mt={20}
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button type="submit" variant="filled" fullWidth mt={20}>
          Sign In
        </Button>

        <Code block mt={20}>
          {JSON.stringify(form.getValues(), null, 2)}
        </Code>
      </form>
    </>
  );
}
