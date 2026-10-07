<script lang='ts'>

    const name = 'PI';
    let uptime = $state(0);
    let lastMaj = $state(0);
    let cpu = $state([]);
    let ram = $state([]);
    // let disques = $state([]);
</script>

<div class="flex flex-col fixed top-20 right-0 bg-amber-400 w-80">
    <h2 class="text-5xl text-center">{name}</h2>
    <ul>
        <li><p>uptime: {uptime}j</p></li>
        <li><p>Dernière maj: {lastMaj}j</p></li>
        <li class="flex flex-row"><p>CPU</p>  <p>{cpu[cpu.length-1]}%</p></li>
        <li class="flex flex-row"><p>RAM</p>  <p>{ram[ram.length-1]}%</p></li>
        <!-- <li></li> -->
    </ul>
</div>
