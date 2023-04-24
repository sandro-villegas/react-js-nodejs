import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navigate, Route, useNavigate } from "react-router-dom";

//la funcion que para las vista

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Set the user's login status to true if a token is found
      setIsLoggedIn(true);
    }
  }, []);

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.token);
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //////////////////////////////////
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <form onSubmit={handleSubmit}>
      <Flex h="100vh" alignItems="center" justifyContent="center">
        <Flex
          flexDirection="column"
          bg={formBackground}
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <Heading mb={6}>Log In</Heading>
          <Input
            placeholder="username"
            variant="filled"
            type="text"
            name="username"
            id="username"
            mb={3}
            onChange={handleInputChange}
          />
          <Input
            placeholder="**********"
            type="password"
            variant="filled"
            mb={6}
            name="password"
            id="password"
            onChange={handleInputChange}
          />
          <Button colorScheme="teal" mb={8} type="submit">
            Log In
          </Button>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="dark_mode" mb="0">
              Enable Dark Mode?
            </FormLabel>
            <Switch
              id="dark_mode"
              colorScheme="teal"
              size="lg"
              onChange={toggleColorMode}
            />
          </FormControl>
        </Flex>
      </Flex>
    </form>
  );
};
export default Login;
