import { useUsersQuery } from './graphql/generated/hooks';

function App() {
  const { data } = useUsersQuery();

  console.log(data);
  return <div></div>;
}

export default App;
