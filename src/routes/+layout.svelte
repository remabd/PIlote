<script lang="ts">
	import type { LayoutProps } from './$types';

	import favicon from '#lib/assets/favicon.svg';
	import logo from '#lib/assets/PIlote.gif';
	import Health from '#lib/components/Health.svelte'

	let { children }: LayoutProps = $props();

	let visible = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="bg-feuille-60 flex flex-row justify-between items-center h-20 pl-3">
    <div class="flex flex-row w-1/2">
        <div><a href="/"><img src={logo} alt="LOGO"></a></div>
        <ul class="flex flex-row ml-10 items-center justify-around w-1/2">
            <li><a href="/shell"><p class="text-2xl font-bold">SHELL</p></a></li>
            <li><a href="/nginx"><p class="text-2xl font-bold">NGINX</p></a></li>
        </ul>
    </div>
    <div class="pr-3">
        <button onclick={() => {visible = !visible}} class="text-2xl font-bold hover:text-blue-800/60">HEALTH</button>
        {#if visible}
            <Health/>
        {/if}
    </div>
</header>

{@render children()}

<footer class="bg-feuille-60 flex flex-row justify-center items-center">
    REMABD
</footer>
