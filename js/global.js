import ModalVideo from "./video.js";
import Tooltip from "./mousehover.js";

const modal = new ModalVideo('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]'    )
modal.init()

const tooltip = new Tooltip('[data-hover]')
tooltip.init()
