<script lang="ts">
	import type { DrinkType } from 'src/types';
	import { update } from './+page';
	export let data;

    let drinkState : DrinkType = data;

	const handleOnClick = async () => {
		const result = await update();
        drinkState = result!;
	};
</script>

<div class="wrapper">
	<img class="drink-thumb" src ={drinkState.thumbUrl} alt ="drink-thumb"/>
	<button on:click={handleOnClick}>Get new drink</button>
	<h2>{drinkState.name}</h2>
	<p>{drinkState.instructions}</p>
    {#each drinkState.ingredients as ingredient}
       <p class="ingredient">{ingredient.amount} {ingredient.name}</p>
    {/each}
	
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Arial, Helvetica, sans-serif;
	}
	.drink-thumb {
		width: 300px;
		border-radius: 1rem;
	}
	p {
		max-width: 500px;
		text-align: center;
	}
	.ingredient {
		margin: 2px 0;
	}
</style>
