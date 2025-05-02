import { GirmpanService } from "./services";

const mainCanvas = document.querySelector("#main-canvas") as HTMLCanvasElement;

GirmpanService.getInstance(mainCanvas);
