function activeSections() {
  const tabMenu = document.querySelectorAll("aside div a");
  const tabContent = document.querySelectorAll("section > div");

  function activeTab(index) {
    event.preventDefault();
    tabContent.forEach((sectionDiv) => {
      sectionDiv.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index + 1);
    });
  });
}
activeSections();
