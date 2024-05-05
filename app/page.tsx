import { Container } from "@mantine/core";
import Login from "@/components/Login/Login";

export default function Home() {
  return (
    <>
      <Container fluid mt={20}>
        <Login />
      </Container>
    </>
  );
}
