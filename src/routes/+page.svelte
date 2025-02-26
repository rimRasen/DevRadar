<script lang='ts'>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import JobList from '$lib/components/JobList.svelte';
    import '../lib/styles/global.css'

    let searchQuery = '';
    let selectedCategory = '';

    async function handleSearch() {
        try { 
            const params = new URLSearchParams({
                q: searchQuery,
                category: selectedCategory
            });
            const response = await fetch(`api/jobs?${params.toString()}`);
            const data = response.json();
            jobs = data;
        } catch (error) {
            console.error("Search Failed", error);
        }
    }
</script>

<Header />

<main class="container">
    <section class="section-hero">
        <h1 class="heading-1">Welcome to DevRadar</h1>
        <p class="text-body">Your one-stop source for job opportunities and events.</p>
        <div class="search-container">
            <div class="search-form">
                <input  
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Search for jobs or events"
                    class="search-input"
                    on:keydown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <select 
                    bind:value={selectedCategory}
                    class="search-select"
                    on:change={handleSearch}
                >
                    <option value="">All Categories</option>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="mobile">Mobile</option>
                    <option value="design">Design</option>
                    <option value="product">Product</option>
                    <option value="devops">DevOps</option>
                </select>
            </div>
        </div>
    </section>

    <section class="section-content"> 
        <div class="flex justify-between items-center mb-8">
            <h2 class="heading-2">Latest Job Opportunities</h2>
            <button class="header-link">View All Jobs</button>
        </div>
        <JobList />
    </section>
</main>

<Footer />