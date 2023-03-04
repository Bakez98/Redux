import "./App.css";
// import { store } from './store';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function App() {
  const { users, loading, error } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  async function fetchData() {
    dispatch({
      type: "FETCH_LOADING",
    });

    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const FetchedUsers = await responce.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: FetchedUsers,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
      });
    }
  }

  if (loading) return "Loading ...............";

  if (error) return "Error Fetching ";

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Fetch Users </button>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
