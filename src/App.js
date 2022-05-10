import {Header} from "./components/Header/Header";
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useDispatch, useSelector} from "react-redux";
import {loadCoffee} from "./redux/coffeeAC";
import {useEffect} from "react";
// import {CoffeeCard} from "./components/Card/CoffeeCard";
import {List} from "./components/List/List";
import {Loader} from "./components/Loader/Loader";

function App() {
    const dispatch = useDispatch()
    const {status} = useSelector(state => state)
    useEffect(() => {
        dispatch(loadCoffee())
    }, [])

  return (
      <>
          <Header />
          <Container>
              {
                  status === "fulled"
                      ?<List />
                      :<Loader status={status}/>
              }
          </Container>
      </>
  );
}

export default App;
