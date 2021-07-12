//console.log("Carga correctamente");

const getDinoName = async () => {
  const response = await fetch("/dinoname");
  const data = await response.json();
  let dinoName = data[0].join(" ");
  document.querySelector("#dinoName").innerHTML = dinoName;
  //console.log(dinoName);
};

const getDinoImage = async () => {
  const response = await fetch("/dinoimage");
  const data = await response.json();
  let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
  let dinoImageUrl = dinoImage.thumbnailUrl;
  let dinoAlt = dinoImage.name;

  if (document.querySelector("#dinoImage") !== null) {
    document.querySelector("#dinoImage").remove();
  }

  let img = document.createElement("img");
  img.id = "dinoImage";
  img.src = dinoImageUrl;
  img.alt = dinoAlt;
  document.querySelector("#img-content").appendChild(img);
  //console.log(dinoImageUrl);
};

document.querySelector("#btnLoad").addEventListener("click", () => {
  getDinoName();
  getDinoImage();
});
