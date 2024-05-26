const ToggleSearchBar = document.getElementById('SearchMenuBtn');
const FullScreenSearch = document.getElementById('SearchMenu');
const inner = document.getElementById('Inner')

ToggleSearchBar.addEventListener("click", function() {
    if(FullScreenSearch.style.display = 'none') {
        FullScreenSearch.style.display = 'flex';
        FullScreenSearch.classList.add("animatedElement")

    }
});

FullScreenSearch.addEventListener("click", function(){
    FullScreenSearch.classList.add("animatedElementOut");
    
    setTimeout(function() {
        FullScreenSearch.style.display = "none";
        FullScreenSearch.classList.remove("animatedElementOut")
     }, 400); 
})

inner.addEventListener('click', function(event) {
    event.stopPropagation(); 
});