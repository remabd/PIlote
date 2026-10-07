<script lang="ts">
	import type { LayoutProps } from './$types';

	import favicon from '#lib/assets/favicon.svg';
	import logo from '#lib/assets/PIlote.gif';
	import Health from '#lib/Health.svelte'

	let { children }: LayoutProps = $props();

	let visible = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="bg-green-900/60 flex flex-row justify-between items-center h-20 pl-3">
    <div class="flex flex-row w-1/2">
        <div><img src={logo} alt="LOGO"></div>
        <ul class="flex flex-row ml-10 items-center justify-around w-1/2">
            <li><a href="/shell"><p class="text-2xl font-bold">SHELL</p></a></li>
            <li><a href="/graph"><p class="text-2xl font-bold">GRAPH</p></a></li>
        </ul>
    </div>
    <div>
        <button onclick={() => {visible = !visible}} class="text-2xl font-bold hover:text-blue-800/60">HEALTH</button>
        {#if visible}
            <Health/>
        {/if}
    </div>
</header>

{@render children()}

<footer class="bg-green-900/60">
    REMABD
</footer>
