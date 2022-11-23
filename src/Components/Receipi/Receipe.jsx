import {
  Card,
  Container,
  Stack,
  Text,
  Image,
  Group,
  Badge,
  Button,
  SimpleGrid,
} from "@mantine/core";
import React from "react";
import resp from "../response.json";

function Receipe(prop) {
  return (
    <Stack align={"center"} p="xl">
      <Container m={"md"} p="md">
        <Text
          align="center"
          fw={"bold"}
          size="32px"
          m="lg"
          ref={prop.targetref}
        >
          Receipes You can make...
        </Text>
        <SimpleGrid cols={3} spacing="lg" m="lg" p={"md"}>
          {resp.map((item) => (
            <Card shadow="sm" p="lg" radius="md" withBorder key={item.id}>
              <Card.Section>
                <Image src={item.image} height={160} alt={item.title} />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{item.title}</Text>
                <Badge color="pink" variant="light">
                  Used Ingredients {item.usedIngredientCount}
                </Badge>
              </Group>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                See the Full Receipe
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}

export default Receipe;
