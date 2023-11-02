import React, { useState }  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {


    const [isDark, setisDark ] = useState(false);

    function changeMode(){
      setisDark((isDark) => !isDark )
    }

    const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
