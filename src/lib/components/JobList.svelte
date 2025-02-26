<script lang='ts'> 
    export let jobs = [
        {
            id: 1, 
            title: "Senior Frontend Developer",
            company: "TechCorp",
            location: "Remote",
            type: "Full-Time",
            description: "Looking for an experienced frontend developer..."
        },
    ]
</script>

<div class="job-grid">
    {#each jobs as job}
        <div class="job-card">
            <h3 class="job-title">{job.title}</h3>
            <p class="job-company">{job.company}</p>
            <div class="job-tags">
                <span class="job-tag">{job.location}</span>
                <span class="job-tag">{job.type}</span>
            </div>
            <p class="job-description">{job.description}</p>
            <button class="job-button">View Details</button>
        </div>
    {/each}
</div>