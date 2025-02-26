<script lang="ts"> 
    let isUserMenuOpen = false;
    let isLoggedIn = false;
</script>

<header class="header">
    <div class="header-container">
        <nav class="header-nav">
            <a href="/" class="header-logo">
                <span class="header-logo-text">Dev<span class="font-normal text-gray-700">Radar</span></span>
            </a>
            
            <div class="header-menu">
                <a href="/jobs" class="header-link">Jobs</a>
                <a href="/events" class="header-link">Events</a>
                
                {#if isLoggedIn}
                    <div class="relative">
                        <button 
                            on:click={() => isUserMenuOpen = !isUserMenuOpen}
                            class="header-link flex items-center space-x-2"
                        >
                            <img src="placeholderer.jpg" alt="User" class="w-8 h-8 rounded-full">
                            <span>Profile</span>
                        </button>

                        {#if isUserMenuOpen}
                            <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                <a href="/dashboard" class="header-link block px-4 py-2">Dashboard</a>
                                <a href="/settings" class="header-link block px-4 py-2">Settings</a>
                                <button class="header-link block w-full text-left px-4 py-2">Sign Out</button>
                            </div>
                        {/if}
                    </div>
                {:else}
                    <a href="/login" class="header-button">Sign In</a>
                {/if}
            </div>
        </nav>
    </div>
</header>