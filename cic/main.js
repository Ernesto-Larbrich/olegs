// Mobile hamburger + dropdown reveal
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Optional: close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', ()=> {
      if(navLinks.classList.contains('open')){
        navLinks.classList.remove('open');
        menuBtn.classList.remove('open');
      }
    });
  });


      function toggleSearch() {
        const input = document.getElementById("searchInput");
        input.classList.toggle("active");
        if (input.classList.contains("active")) {
          input.focus();
        }
      }
  
      function handleSearch(event) {
        if (event.key === "Enter") {
          const query = event.target.value.trim();
          if (query) {
            alert(`Searching for: ${query}`);
            // Or redirect:
            // window.location.href = `/search?query=${encodeURIComponent(query)}`;
          }
        }}


        // Auto-scroll highlights
    setInterval(() => {
      const scrollBox = document.getElementById('highlights');
      scrollBox.scrollBy({left: 270, behavior:'smooth'});
      if (scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth)
        {scrollBox.scrollTo({left:0, behavior:'smooth'});
      }
    }, 4000);
    
    // Auto-scroll news
    setInterval(() => {
      const scrollBox = document.getElementById('newsScroll');
      scrollBox.scrollBy({left: 270, behavior:'smooth'});
      if (scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth) {
        scrollBox.scrollTo({left:0, behavior:'smooth'});
      }
    }, 4000);