document.addEventListener('DOMContentLoaded', function() {
  const exploreGrid = document.querySelector('.explore-grid[data-artifact-target]');
  if (exploreGrid) {
    const targetSection = document.querySelector(exploreGrid.dataset.artifactTarget);
    const featuredImg = targetSection.querySelector('#featured-img');
    const featuredTitle = targetSection.querySelector('#featured-title');
    const featuredDescription = targetSection.querySelector('#featured-description');

    exploreGrid.addEventListener('click', (event) => {
      const clickedArtifact = event.target.closest('.artifact-item'); 
      if (clickedArtifact) {
        const imgSrc = clickedArtifact.dataset.artifactImg;
        const title = clickedArtifact.dataset.artifactTitle;
        const description = clickedArtifact.dataset.artifactDescription;

        featuredImg.src = imgSrc;
        featuredImg.alt = title; 
        featuredTitle.textContent = title;
        featuredDescription.textContent = description;

        
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});


// Initialize the artifacts data
function initializeArtifacts() {
  const exploreGrid = document.querySelector('.explore-grid');
  const artifacts = [
    {
      img: "images/artifacts/artifact1.jpg",
      title: "Ram's-head Amulet",
      description: "This amulet was probably made for a necklace worn by one of the Kushite kings. Representations show these pharaohs wearing a ram's-head amulet tied around the neck on a thick cord, the ends of which fall forward over the shoulders. Sometimes a smaller ram's head is attached to each end. Rams were associated with the god Amun, particularly in Nubia, where he was especially revered."
    },
    {
      img: "images/artifacts/artifact2.jpg",
      title: "Pectoral and Necklace of Sithathoryunet",
      description: "This pectoral is composed around the throne name of King Senwosret II. It was found among the jewelry of Princess Sithathoryunet in a special niche of her underground tomb beside the pyramid of Senwosret II at Lahun. Hieroglyphic signs make up the design, and the whole may be read: *The god of the rising sun grants life and dominion over all that the sun encircles for one million one hundred thousand years [i.e., eternity] to King Khakheperre [Senwosret II].*"
    },
    {
      img: "images/artifacts/artifact3.jpg",
      title: "Ostracon with Pharaoh Spearing a Lion",
      description: "In this lively hunting scene, an unidentified Ramesside pharaoh is represented symbolically slaying the enemies of Egypt in the form of a lion. The hieratic text reads: *The slaughter of every foreign land, the Pharaoh—may he live, prosper, and be healthy.*"
    },
    {
      img: "images/artifacts/artifact4.jpg",
      title: "Gazelle",
      description: "This delicate ivory gazelle stands on a wooden pedestal with inlaid decoration depicting plants that allude to its semi-desert habitat. The gazelle has its head erect and appears alert, as though sensing danger. Egyptian artists were keen observers of the world and produced many naturalistic images of the creatures around them. The gazelle's ears have broken off and the horns, made separately and probably of another material, are missing."
    },
    {
      img: "images/artifacts/artifact5.jpg",
      title: "Cult Image of the God Ptah",
      description: "This statuette depicts Ptah, the chief god of Egypt's capital city Memphis, who is easy to identify by his tight-fitting cap and enveloping shroud. Other iconographic details, such as the royal beard, the large and detailed broad collar, the scepter of merged *was* and *djed* signs, and a platform representing the hieroglyph for universal order, as well as the brilliant blue stone, communicate four important epithets: Lord of Lower Egypt, Master Craftsman, Lord of Truth, and Lord of the Sky."
    },
    {
      img: "images/artifacts/artifact6.jpg",
      title: "Inlay Depicting a Falcon with Spread Wings",
      description: "This falcon with spread wings holding a shen ring - on parly preserved here - represents the god Horus Behdety. The figure of this god generally hovers protectively over the head of a king."
    }
  ];

  artifacts.forEach(artifact => {
    const artifactItem = `
      <div class="artifact-item" 
           data-artifact-img="${artifact.img}" 
           data-artifact-title="${artifact.title}" 
           data-artifact-description="${artifact.description}">
        <img src="${artifact.img}" alt="${artifact.title}"> 
      </div>`;

    exploreGrid.innerHTML += artifactItem;
  });
}

// Call the initializeArtifacts function when the page loads
initializeArtifacts();