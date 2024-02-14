const {BASE_URL} = import.meta.env;

export function imageCenter(element: HTMLButtonElement) {
  const rndInt = randomIntFromInterval(1,12);

  element.innerHTML = `<p>pas de hasard<br>que des rencontres.</p>
                      <img src="${BASE_URL}/public/Areas/Image${rndInt}.jpg" width=500px />
                      <img class="Point" src="${BASE_URL}/public/PointsSurLaCarte/point${rndInt}.png" width=400px />
                      <p class="bottom"> ${rndInt}/12<p>`
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
