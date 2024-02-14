const {BASE_URL} = import.meta.env;

export function Map(element: HTMLButtonElement) {

  element.innerHTML = `<img src="${BASE_URL}Map/Map.jpg" width=500px />`
}
