
<script lang='ts'>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import '../lib/styles/global.css'
</script>

<Header />

<main class="container mx-auto mt-8">
    <section class="text-center py-16 bg-blue-50">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Welcome to DevRadar</h1>
        <p class="text-lg text-gray-700"> Your one-stop source for job opportunities and events.</p>

    </section>
</main>


<Footer />

<slot />