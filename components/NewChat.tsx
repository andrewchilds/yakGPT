import React from "react";

import { Container } from "@mantine/core";
import { useRouter } from "next/router";

export default function NewChatCarousel() {
  const router = useRouter();

  return (
    <Container py="xl">
      <h2 style={{ textAlign: "center" }}>Hi! What do you need help with?</h2>
    </Container>
  );
}
