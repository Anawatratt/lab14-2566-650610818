"use client";
import { Button,Container,Text,Textarea,Title,Divider,Group,Pagination,Rating} from "@mantine/core";

export default function FoodReviewPage() {
  return (

    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt='sm'>
        Your rating
      </Title>

      <Rating size="lg"/>

      <Textarea 
      label="Your review" 
      placeholder="Do you enjoy eating?"
      mt="xs"
      minRows={3}
      />

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Group>
        <Center maw={400} h={100} mx="auto">
      <Title order={4} mt='sm'>
        Elon Musk
        <Rating ml="xs" size="sm"/>
        <Text order={4} mt='sm'>
        Best pizza in the world.I give you X score;
      </Text>
      </Title>
      </Center>
      </Group>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly></Rating>
      </Group>
      <Text align="center" fz="md" color="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination
        mt={"md"}
        position="center"
        color="orange"
        total={20}
      ></Pagination>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Anawat Ratanakitsornn 650610818
      </Text>
    </Container>
  );
}
