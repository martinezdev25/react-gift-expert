import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onNewCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => onNewCategory(event)}
      />

      <ol>
        {
          categories.map((category) => (<GifGrid key={category} category={category} />))
        }
      </ol>
    </>
  )
}
