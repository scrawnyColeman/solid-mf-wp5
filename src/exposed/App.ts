import { render } from "solid-js/web";
import App from "../App";

export default function (id: string) {
  render(App, document.getElementById(id));
}
