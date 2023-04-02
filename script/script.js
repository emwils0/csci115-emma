const gallerys = document.querySelectorAll(".gallery");
const modal = document.getElementById("galleryModal");
const close = document.getElementById("close");
const galleryInfo = document.getElementById("galleryInfo");

gallerys.forEach(gallery => {
    gallery.addEventListener("click", () => {
        let id = gallery.id;
        modal.style.display = "flex";

        if (id == "WestwoodView")
        {
            galleryInfo.innerHTML = "The views from the top are pretty insane! It is worth the trek and verticle you will face";
        }
        else if (id == "ViewofNanaimo")
        {
            galleryInfo.innerHTML = "You can see all of Nanaimo and further! The views of the landscape on a clear day is very beautiful";
        }
        else if (id == "NorthNanaimo")
        {
            galleryInfo.innerHTML = "Not only are the views at the top worthwhile, but there are plenty of times where you can stop and enjoy the view on the way up.";
        }
        else if (id == "Jasper")
        {
            galleryInfo.innerHTML = "Make sure to bring your camera to capture the great views";
        }
        else if (id == "bigfall")
        {
            galleryInfo.innerHTML = "A waterfall is always worth the trek. Ammonite looks especially good with the fall colours."
        }
        else if (id == "tree")
        {
            galleryInfo.innerHTML = "If you go down the stairs, you can explore the base of the falls. There are plenty of cool things down here like fallen trees!"
        }
        else if (id == "stairs")
        {
            galleryInfo.innerHTML = "These stairs do suck on the way back up so be prepared"
        }
        else if (id == "water")
        {
            galleryInfo.innerHTML = "Ammonite looks good from the bottom but equally as cool from the top. The moss makes for a great picture."
        }
        else if (id == "branch")
        {
            galleryInfo.innerHTML = "Neckpoint has plenty of different species of wildlife and plantlife"
        }
        else if (id == "mountainpeaks")
        {
            galleryInfo.innerHTML = "Clear day means you can see the snow caps."
        }
        else if (id == "rocks")
        {
            galleryInfo.innerHTML = "Neckpoints views are unique for the rock formations that you can climb to get a good view of the water and mountains"
        }
        else if (id == "silhouette")
        {
            galleryInfo.innerHTML = "The beach is fun to explore the immense amount of driftwood and bark. Sometimes there is art left by others made with these materials."
        }

    });
});


close.addEventListener("click", () => {
    modal.style.display = "none";
})