import { Container } from "react-bootstrap";
import { Category } from "./Components/Category";
import { Header } from "./Components/Header";
import {NavBar} from "./Components/NavBar";
import { NewCardItem } from "./Components/CardItem";
import { data } from "./Components/Data";
import { useState } from "react";



function App() {
  const [itemsData, setItemsData ] = useState(data)

  const allCategories =["الكل", ...new Set(data.map((item) => item.category))]


  // Filter by category 
  const FilterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(data)
    } else {
      const newArr = data.filter((item) => item.category === cat )
      setItemsData(newArr)
    }
  }


  const FilterBySearch = (word) => {
    if (word !== "") {
      const newArr = data.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="font body">
      <NavBar FilterBySearch={FilterBySearch} />
      <Container>
        <Header/>
        <Category FilterByCategory={FilterByCategory} allCategories={allCategories}/>
        <NewCardItem itemsData ={itemsData}/>
      </Container>
    </div>
  );
}

export default App;