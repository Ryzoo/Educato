import FormService from './FormService';

export default class URLService {
  static goTo(address, urlMethod = URLMethod.GET) {
    switch (urlMethod) {
      case URLMethod.GET:
        document.location.href = address;
        break;
      default:
        FormService.submit(address, URLMethod.DELETE);
    }
  }
}

export const URLMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};
