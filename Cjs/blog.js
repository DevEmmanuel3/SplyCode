// Central post data
const posts = [
  { title: "Post ", content: "This is the content of post 1.", image: "img/html.jfif", link: "post.html" },
  { title: "Post 2", content: "This is the content of post 2.", image: "img/html.jfif", link: "post2.html" },
  { title: "Post 3", content: "This is the content of post 3.", image: "img/html.jfif", link: "post3.html" },
  { title: "Post 4", content: "This is the content of post 4.", image: "img/html.jfif", link: "post4.html" },
  { title: "Post 5", content: "This is the content of post 5.", image: "img/html.jfif", link: "post5.html" },
  { title: "Post 6", content: "This is the content of post 6.", image: "img/html.jfif", link: "post6.html" },
  { title: "Post 7", content: "This is the content of post 7.", image: "img/html.jfif", link: "post7.html" },
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


                        <div class="col-lg-6" style="width:80%; justify-content: center; margin:10px;  word-break:break-word; overflow-wrap:break-word;">
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
      <img src="${post.image}" alt="${post.title}" style="width: 100px;">
      <div>
        <h4>${post.title}</h4>
        <p>${post.content.substring(0, 40)}...</p>
      </div>`
    ;
    relatedContainer.appendChild(a);
  });
}