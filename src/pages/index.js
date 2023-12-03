import {
  Flex,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
export default function Home() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const list = ["React", `NextJs`, "Laravel", "GraphQL", "NestJs"];
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" justify="center" alignItems="center">
          <Flex p="10px">
            <Text fontSize="5xl">Register Form</Text>
          </Flex>
          <Flex direction="row" justify="center" gap={2} p="10px" w="50%">
            <FormControl>
              <FormLabel>Firstname</FormLabel>
              <Input type="text" {...register("firstname")}></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Lastname</FormLabel>
              <Input type="text" {...register("lastname")}></Input>
            </FormControl>
          </Flex>
          <Flex direction="row" justify="center" gap={2} p="10px" w="50%">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register("username")}></Input>
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")}></Input>
            </FormControl>
          </Flex>
          <Flex direction="row" justify="center" gap={2} p="10px" w="50%">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email")}></Input>
            </FormControl>
          </Flex>
          <Flex direction="row" justify="center" gap={2} p="10px" w="50%">
            {list.map((data, index) => (
              <Controller
                key={index}
                name={data}
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox {...field} value={data}>
                    {data}
                  </Checkbox>
                )}
              />
            ))}
          </Flex>
          <Flex direction="row" justify="center" gap={2} p="10px" w="50%">
            <Button backgroundColor="mediumblue" color="white" type="submit">
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>
    </>
  );
}
