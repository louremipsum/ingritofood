import { Modal } from "@mantine/core";
import React from "react";

function ReceipeModal(prop) {
  return (
    <Modal
      opened={prop.opened}
      onClose={() => setOpened(false)}
      title={item.title}
    >
      Hello World
    </Modal>
  );
}

export default ReceipeModal;
