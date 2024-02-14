import '../style.css'
import { imageLeft } from './ImageLeft.ts'
import { imageCenter } from './ImageCenter.ts'
import { Map } from './Map.ts'
import '../assets/fonts/NeueHaasUnicaPro-Black.ttf'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h2 class="ImageLeft" id="imageLeft" />
    <h2 class="ImageCenter" id="imageCenter" />
    <h2 class="Map" id="map" />
  </div>
`
imageLeft(document.querySelector<HTMLButtonElement>('#imageLeft')!)
imageCenter(document.querySelector<HTMLButtonElement>('#imageCenter')!)
Map(document.querySelector<HTMLButtonElement>('#map')!)
