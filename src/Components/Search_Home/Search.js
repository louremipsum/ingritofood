import { useState } from "react";
import {
  Checkbox,
  Group,
  Avatar,
  Text,
  TransferList,
  Button,
} from "@mantine/core";

const mockdata = [
  {
    value: "bender",
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    description: "Fascinated with cooking, though has no sense of taste",
  },

  {
    value: "carol",
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  // ...other items
];

const ItemComponent = ({ data, selected }) => (
  <Group noWrap>
    <Avatar src={data.image} radius="xl" size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
    </div>
    <Checkbox
      checked={selected}
      onChange={() => {}}
      tabIndex={-1}
      sx={{ pointerEvents: "none" }}
    />
  </Group>
);

function Search() {
  const [data, setData] = useState([mockdata, []]);
  return (
    <>
      <TransferList
        value={data}
        onChange={setData}
        searchPlaceholder={[
          "Search Ingredients to add...",
          "Search Ingredients to remove...",
        ]}
        nothingFound="Sorry, if you cannot find your Ingredients"
        placeholder={[
          "Why do you have everything in the world",
          "Fridge is Empty",
        ]}
        titles={["All Ingredients", "Ingredients you have"]}
        listHeight={400}
        breakpoint="lg"
        itemComponent={ItemComponent}
        filter={(query, item) =>
          item.label.toLowerCase().includes(query.toLowerCase().trim())
        }
      />
      <Button color={"blue"} size="md" onClick={() => console.log(data[1])}>
        Get Receipes
      </Button>
    </>
  );
}

export default Search;
