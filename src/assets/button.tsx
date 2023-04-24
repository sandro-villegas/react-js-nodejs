import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function handleClick() {
  console.log("El botón ha sido clickeado");
}

const PrincipalButton = () => {
  return (
    <Button colorScheme="blue" onClick={handleClick}>
      Regitrart
    </Button>
  );
};

export default PrincipalButton;
