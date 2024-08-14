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

        // Smooth scroll to the featured artifact section (optional)
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
      img: "images/artifact1.jpg",
      title: "Artifact 1 Title",
      description: "A fascinating description of artifact 1."
    },
    {
      img: "images/artifact1.jpg",
      title: "Artifact 2 Title",
      description: "An insightful exploration of artifact 2."
    },
    {
      img: "images/artifact1.jpg",
      title: "Artifact 3 Title",
      description: "A detailed look at artifact 3."
    },
    {
      img: "images/artifact1.jpg",
      title: "Artifact 4 Title",
      description: "The history and significance of artifact 4."
    },
    {
      img: "images/artifact1.jpg",
      title: "Artifact 5 Title",
      description: "Learn about the mysteries of artifact 5."
    },
    {
      img: "images/artifact1.jpg",
      title: "Artifact 6 Title",
      description: "Uncover the stories of artifact 6."
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