const {BASE_URL} = import.meta.env;

export function imageLeft(element: HTMLButtonElement) {
  const rndInt = randomIntFromInterval(1,12);

  element.innerHTML = `<p>: à st-michel.</p><br>
                      <img src="${BASE_URL}Areas/image${rndInt}.jpg" width=400px />
                      <img class="Point" src="${BASE_URL}PointsSurLaCarte/point${rndInt}.png" width=400px />
                      <p class="bottom"> ${rndInt}/12<p>`
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
