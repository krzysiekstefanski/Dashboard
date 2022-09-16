import { color } from "./colors";

export function checkColor(myColor) {
    return Array.from(myColor)[0] === "#" ? myColor : color[myColor];
}