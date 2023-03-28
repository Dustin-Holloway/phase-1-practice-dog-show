const init = () => {
  const inputName = document.querySelector("#input");
  const inputBreed = document.querySelector("#input");
  const inputSex = document.querySelector("#sex");
  const submitBtn = document.querySelector("input#submit");

  // const configurationObj = {
  //   method: "PATCH",
  //   headers: {
  //     "Content-type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(dogData),
  // };

  function renderDogs(dog) {
    let currentDog;

    let currentName;
    let currentBreed;
    let currentSex;

    const table = document.querySelector("#table-body");
    const row = document.createElement("tr");
    const name = document.createElement("td");
    name.textContent = dog.name;
    const breed = document.createElement("td");
    breed.textContent = dog.breed;
    const sex = document.createElement("td");
    sex.textContent = dog.sex;

    const btn = document.createElement("button");
    const dogName = document.querySelector("input#name");
    const dogBreed = document.querySelector("input#breed");
    const dogSex = document.querySelector("input#sex");
    innerHTML = "";
    table.append(row);
    row.append(name, breed, sex, btn);
    btn.innerText = "EDIT";

    btn.addEventListener("click", (e) => {
      const dogNameValue = name.textContent;
      const dogBreedValue = breed.textContent;
      const dogSexValue = sex.textContent;
      dogName.value = dogNameValue;
      dogBreed.value = dogBreedValue;
      dogSex.value = dogSexValue;
      currentDog = dog;
      currentName = dogNameValue;
      currentBreed = dogBreedValue;
      currentSex = dogSexValue;

      const formData = document.querySelector("form");

      formData.addEventListener("submit", (e) => {
        e.preventDefault();
        name.textContent = formData.name.value;
        breed.textContent = formData.breed.value;
        sex.textContent = formData.sex.value;
        currentDog.name = formData.name.value;
        currentDog.breed = formData.breed.value;
        currentDog.sex = formData.sex.value;

        fetch(`http:///localhost:3000/dogs/${currentDog.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(currentDog),
        });
      });
    });
  }

  fetch(`http:///localhost:3000/dogs/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dog = data;
      dog.forEach(renderDogs);
    });
};
document.addEventListener("DOMContentLoaded", init);
