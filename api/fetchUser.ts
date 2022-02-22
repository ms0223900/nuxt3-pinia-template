import { UserData } from "~~/store";

const fetchUser = async () => {
  const userList = (await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json())) as UserData[];
  const id = Math.round(Math.random() * 10);
  const user = userList[id];
  return user;
};

export default fetchUser;
