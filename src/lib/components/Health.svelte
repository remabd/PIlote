<script lang="ts">
	// import { Plot, BarY, RectY, RuleY } from 'svelteplot';
	import { slide } from 'svelte/transition';

	let { datas } = $props();

	const name = 'PI';
	let uptime: number | string = $state(0);
	let lastMaj: number | string = $state(0);
	// let cpu = $state([30, 40, 60, 80, 20, 20, 30, 20, 40, 50, 30, 40, 30]);
	// let ram = $state([]);
	// let disques = $state([]);

	$effect(() => {
		setInterval(fetchData, 1);
	});



	const fetchData = () => {}

</script>

<div
	class="flex flex-col fixed top-20 right-0 bg-rause-60 w-80"
	transition:slide={{ duration: 500, axis: 'x' }}
>
	<h2 class="text-5xl text-center">{name}</h2>
	<ul>
		<li><p>uptime: {uptime}j</p></li>
		<li><p>Dernière maj: {lastMaj}j</p></li>
		<!-- <li class="flex flex-row">
			<p>CPU</p>
			 <Plot grid>
                <RuleY data={[0]}/>
                <BarY data={cpu} y="%"/>
            </Plot>
			<Plot height={300} grid marginLeft={40}>
				<RectY />
				<RuleY data={[0]} />
			</Plot>
			<p>{cpu[cpu.length - 1]}%</p>
		</li> -->
		<!-- <li class="flex flex-row">
			<p>RAM</p>
			<p>{ram[ram.length - 1]}%</p>
		</li> -->
		<!-- <li></li> -->
	</ul>
</div>
