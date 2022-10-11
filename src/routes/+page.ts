import type { IngredientType } from "src/types";
export async function load (){
    try{
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const ingredients : IngredientType[] = [...Array(15)]
        .map((value,i)=> ({
            name:data.drinks[0][`strIngredient${i+1}`],
            amount:data.drinks[0][`strMeasure${i+1}`]

        }))
        .filter((ingredient)=> ingredient.name);
        return {
            name:data.drinks[0].strDrink,
            instructions: data.drinks[0].strInstructions,
            ingredients,
            thumbUrl: data.drinks[0].strDrinkThumb
        };

    }catch(error){
        console.error(`error in load function for ${error}`);
    }
}
export async function update(){
    return load();
}