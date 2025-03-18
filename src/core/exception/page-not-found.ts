import NotFoundException from "./not-found";

export default class PageNotFoundException extends NotFoundException {
  message = "page not found";
}
