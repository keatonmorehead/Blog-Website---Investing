// Blog data will be loaded from blog-data.js

// Initialize the blog listing
let retryCount = 0;
const maxRetries = 20;

function initializeBlog() {
    // Check if blogs array is available
    if (typeof blogs !== 'undefined' && Array.isArray(blogs) && blogs.length > 0) {
        loadBlogList();
        window.addEventListener('hashchange', handleRoute);
        handleRoute();
    } else if (retryCount < maxRetries) {
        // Retry after a short delay if blogs array isn't loaded yet
        retryCount++;
        setTimeout(initializeBlog, 50);
    } else {
        // Show error message if blogs couldn't be loaded
        console.error('Failed to load blog data after multiple attempts');
        const blogListContainer = document.getElementById('blog-list');
        if (blogListContainer) {
            blogListContainer.innerHTML = '<p style="text-align: center; color: var(--dark-grey); padding: 2rem;">Unable to load blog posts. Please refresh the page.</p>';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initializeBlog();
});

// Also try to initialize if window is already loaded (in case DOMContentLoaded already fired)
if (document.readyState === 'loading') {
    // DOM is still loading, wait for DOMContentLoaded
} else {
    // DOM is already loaded
    initializeBlog();
}

// Handle routing
function handleRoute() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#blog/')) {
        const blogId = hash.replace('#blog/', '');
        showBlogPost(blogId);
    } else {
        showBlogList();
    }
}

// Show blog listing
function showBlogList() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('blogs').style.display = 'block';
    const blogPostContainer = document.querySelector('.blog-post-container');
    if (blogPostContainer) {
        blogPostContainer.style.display = 'none';
    }
    loadBlogList();
}

// Load and display blog list
function loadBlogList() {
    const blogListContainer = document.getElementById('blog-list');
    if (!blogListContainer) {
        console.error('Blog list container not found');
        return;
    }
    
    // Check if blogs array exists
    if (typeof blogs === 'undefined' || !Array.isArray(blogs) || blogs.length === 0) {
        console.error('Blogs array is not defined or empty');
        blogListContainer.innerHTML = '<p style="text-align: center; color: var(--dark-grey);">No blog posts available.</p>';
        return;
    }
    
    // Sort blogs by date (newest first)
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    blogListContainer.innerHTML = sortedBlogs.map((blog) => `
        <article class="blog-card" onclick="openBlogPost('${blog.id}')">
            <div class="blog-card-date">${formatDate(blog.date)}</div>
            <h3 class="blog-card-title">${blog.title}</h3>
            <p class="blog-card-preview">${blog.preview}</p>
            <a href="#blog/${blog.id}" class="blog-card-link" onclick="event.stopPropagation(); openBlogPost('${blog.id}')">Read</a>
        </article>
    `).join('');
}

// Open blog post
function openBlogPost(blogId) {
    window.location.hash = `blog/${blogId}`;
    showBlogPost(blogId);
}

// Show individual blog post
function showBlogPost(blogId) {
    if (typeof blogs === 'undefined' || !Array.isArray(blogs)) {
        console.error('Blogs array not available');
        showBlogList();
        return;
    }
    
    const blog = blogs.find(b => b.id === blogId);
    if (!blog) {
        console.error('Blog post not found:', blogId);
        showBlogList();
        return;
    }
    
    // Hide landing page and blog list
    document.getElementById('home').style.display = 'none';
    document.getElementById('blogs').style.display = 'none';
    
    // Create or show blog post container
    let blogPostContainer = document.querySelector('.blog-post-container');
    if (!blogPostContainer) {
        blogPostContainer = document.createElement('div');
        blogPostContainer.className = 'blog-post-container';
        document.body.insertBefore(blogPostContainer, document.querySelector('.footer'));
    }
    blogPostContainer.style.display = 'block';
    
    // Find current blog index
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const currentIndex = sortedBlogs.findIndex(b => b.id === blogId);
    const prevBlog = currentIndex < sortedBlogs.length - 1 ? sortedBlogs[currentIndex + 1] : null;
    const nextBlog = currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null;
    
    // Generate navigation buttons
    const prevButton = prevBlog 
        ? `<a href="#blog/${prevBlog.id}" class="nav-button nav-button-previous" onclick="openBlogPost('${prevBlog.id}'); return false;">Previous: ${prevBlog.title}</a>`
        : `<span class="nav-button nav-button-previous disabled">Previous</span>`;
    
    const nextButton = nextBlog 
        ? `<a href="#blog/${nextBlog.id}" class="nav-button nav-button-next" onclick="openBlogPost('${nextBlog.id}'); return false;">Next: ${nextBlog.title}</a>`
        : `<span class="nav-button nav-button-next disabled">Next</span>`;
    
    // Render blog post
    blogPostContainer.innerHTML = `
        <div class="blog-post-header">
            <div class="blog-post-date">${formatDate(blog.date)}</div>
            <h1 class="blog-post-title">${blog.title}</h1>
        </div>
        <div class="blog-post-content">
            ${blog.content}
        </div>
        <div class="blog-navigation">
            ${prevButton}
            <a href="#blogs" class="nav-button" onclick="showBlogList(); return false;">Back to All Posts</a>
            ${nextButton}
        </div>
    `;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

