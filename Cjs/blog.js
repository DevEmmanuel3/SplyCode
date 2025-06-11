// Central post data
const posts = [
  { title: "Top 10 Python Projects for Beginners in 2025 ", content: "Read More...............", image: "im/7-Python-Project-Ideas-for-Beginners.png", link: "Top-10-Python-Projects-for-Beginners-in-2025.html" },
  { title: "How to Build a Responsive Website Using HTML, CSS, and JavaScript", content: "Read More.....................", image: "im/res.jpeg", link: "How-to-Build-a-Responsive-Website-Using.html" },
  { title: "Best JavaScript Tips & Tricks Every Developer Should Know", content: "Read More.....", image: "im/tip.jpeg", link: "Best-JavaScript-Tips-&-Tricks-Every-Developer-Should-Know.html" },
  { title: "React vs Vue vs Angular: Which Should You Learn in 2025?", content: "Read More.....", image: "im/rit.jpeg", link: "React-vs-Vue-vs-Angular-Which-Should-You-Learn-in-2025.html" },
  { title: "How to Use APIs in JavaScript with Real Examples", content: "Read More.......", image: "im/api.png", link: "How-to-Use-APIs-in-JavaScript-with-Real-Examples.html" },
  { title: "Understanding Git & GitHub: A Beginner's Guide", content: "Read More.....", image: "im/git.png", link: "Understanding-Git-&-GitHub-A-Beginner's-Guide.html" },
  { title: "Top VS Code Extensions That Will 10x Your Productivity", content: "Read More.......", image: "im/vs.png", link: "Top-VS-Code-Extensions-That-Will-10x-Your-Productivity.html" },
  { title: "Post 8", content: "This is the content of post 8.", image: "img/html.jfif", link: "post8.html" },
  { title: "Post 9", content: "This is the content of post 9.", image: "img/html.jfif", link: "post9.html" },
  { title: "Post 10", content: "This is the content of post 10.", image: "img/html.jfif", link: "post10.html" },
  { title: "Post 11", content: "This is the content of post 11.", image: "img/html.jfif", link: "post11.html" },
  { title: "Post 12", content: "This is the content of post 12.", image: "img/html.jfif", link: "post12.html" }
];

// Homepage rendering
if (document.getElementById("blogPosts")) {
  const blogPostsContainer = document.getElementById("blogPosts");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const searchInput = document.getElementById("searchInput");

  let postsPerPage = 10;
  let currentLimit = postsPerPage;

  function renderPosts(filter = "") {
    blogPostsContainer.innerHTML = "";
    const visiblePosts = posts.filter(post =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );

    visiblePosts.slice(0, currentLimit).forEach((post, index) => {
      const a = document.createElement('a');
      a.href = post.link;
      a.className = `post-card${index >= currentLimit ? ' hidden' : ''}`;
      a.innerHTML = `


                        <div class="mx-auto"  style="width:90%; justify-content: center; margin:10px; 
                        margin-left: auto;  margin-right: auto;  word-break:break-word; overflow-wrap:break-word;">
                        <div class="position-relative mb-3">
                            <img class="img-fluid w-100" src="${post.image}" style="object-fit: cover;" alt="${post.title}" >
<div class="overlay position-relative bg-light" style="max-width: 100%; overflow: hidden;">
    <div class="mb-2" style="display: flex; flex-direction: column; flex-wrap: wrap; word-break: break-word; font-size: 14px; max-width: 100%;">
        <h3 style="margin: 0; word-break: break-word; overflow-wrap: break-word; max-width: 100%;">${post.title}</h3>   
        <p style="margin: 0; word-break: break-word; overflow-wrap: break-word; max-width: 100%;">
            ${post.content.replace(/<[^>]*>/g, '').substring(0, 60)}...
        </p>
    </div>
</div>
                    </div> 






        `
      ;
      blogPostsContainer.appendChild(a);
    });

    loadMoreBtn.style.display = visiblePosts.length > currentLimit ? "block" : "none";
  }

  renderPosts();

  loadMoreBtn.addEventListener("click", () => {
    currentLimit += postsPerPage;
    renderPosts(searchInput.value);
  });

  searchInput.addEventListener("input", () => {
    currentLimit = postsPerPage;
    renderPosts(searchInput.value);
  });
}

// Related posts on single post pages
if (document.getElementById("related-posts")) {
  const relatedContainer = document.getElementById("related-posts");

  // Remove current post from related list (optional)
  const currentPage = window.location.pathname.split('/').pop();
  const related = posts.filter(post => post.link !== currentPage).slice(0, 4);

  related.forEach(post => {
    const a = document.createElement('a');
    a.href = post.link;
    a.style.display = 'flex';
    a.style.gap = '10px';
    a.style.textDecoration = 'none';
    a.style.color = 'black';
    a.style.marginBottom = '1rem';

    a.innerHTML =` 
<div style="display: flex; align-items: center; gap: 15px; background: #f9f9f9; padding: 10px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); max-width: 500px;">
  <img src="${post.image}" alt="${post.title}" style="width: 150px; height: 85%; border-radius: 8px; object-fit: cover;">
  <div>
    <h4 style="margin: 0 0 5px 0; font-size: 18px; color: #333;">${post.title}</h4>
    <p style="color: #5dade2; margin: 0; font-size: 14px;">${post.content.substring(0, 40)}...</p>
  </div>
</div>
`
    ;
    relatedContainer.appendChild(a);
  });
}