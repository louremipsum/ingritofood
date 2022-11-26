import { useState } from "react";
import {
  Text,
  TextInput,
  Box,
  createStyles,
  Badge,
  Stack,
} from "@mantine/core";

const data = [
  {
    id: 1,
    value: "carrot",
    label: "Carrot",
  },
  {
    id: 2,
    value: "tomato",
    label: "Tomato",
  },
  {
    id: 3,
    value: "onion",
    label: "Onion",
  },
  {
    id: 4,
    value: "corn",
    label: "Corn",
  },
];

function Search() {
  const { classes } = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [fridgeItem, setFrigeItem] = useState([]);

  /**
   * Handles the onChange of Autocomplete
   * @param {HTMLInputEvent} e
   */
  const searchItems = (event) => {
    const v = event.currentTarget.value;
    setSearchValue(v);
    const regexCheck = new RegExp(v, "gi");
    if (!v) {
      // left data is (original data - items selected for fridge) so basically in set terms it is difference
      const leftData = data.filter((x) => !fridgeItem.includes(x));
      setFilteredData(leftData);
      return;
    }

    const newData = filteredData.filter((name) => name.label.match(regexCheck));
    setFilteredData(newData);
  };

  /**
   * Handles the adding of items to fridge and removing from filtered data
   * @param {string} itemId
   */
  const addToFridge = (item) => {
    const newFridge = [...fridgeItem, item];
    setFrigeItem(newFridge);
    const newFilter = filteredData.filter((i) => i.id !== item.id);
    setFilteredData(newFilter);
  };

  /**
   * Handles the removing of items from fridge and adding to filtered data
   * @param {string} itemId
   */
  const rmFromFridge = (item) => {
    const newFilter = [...filteredData, item];
    const newFridge = fridgeItem.filter((i) => i.id !== item.id);
    setFrigeItem(newFridge);
    setFilteredData(newFilter);
  };

  return (
    <>
      <TextInput
        placeholder="Search Ingredients..."
        label="Ingredients"
        color="white"
        value={searchValue}
        onChange={searchItems}
      />
      <Stack className={classes.filter}>
        {filteredData.length ? (
          filteredData.map((item) => (
            <Box
              onClick={() => addToFridge(item)}
              key={item.id}
              className={classes.autocom}
            >
              {item.label}
            </Box>
          ))
        ) : (
          <Text>Sorry, No such Item found</Text>
        )}
      </Stack>
      <Text color={"white"}>You have the following items...</Text>
      <Box className="fridge">
        {fridgeItem.length ? (
          fridgeItem.map((item) => (
            <Badge
              key={item.id}
              className={classes.fridgeitem}
              size="lg"
              radius="md"
              variant="filled"
              onClick={() => rmFromFridge(item)}
            >
              {item.label}
            </Badge>
          ))
        ) : (
          <Text italic color={"dimmed"} size="sm">
            Search and Add some items in your fridge
          </Text>
        )}
      </Box>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  autocom: {
    display: "flex",
    color: "black",
    padding: "0.25rem",
    margin: "0rem",
    cursor: "pointer",
    flexDirection: "column",
    width: "inherit",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: theme.fn.darken("#00acee", 0.05),
    },
  },
  filter: {
    padding: "0rem",
    margin: "0rem",
    width: "12rem",
    flexDirection: "flex-start",
  },
  fridge: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0.5rem",
    margin: "1rem",
    background: "white",
    minHeight: "1rem",
    width: "5rem",
    color: "black",
  },
  fridgeitem: {
    color: "white",
    padding: "0.5rem",
    margin: "1rem",
    cursor: "pointer",
  },
}));

export default Search;
