import { URLMethod } from './URLService';

export default class FormService {
  static submit(path, method, data = {}) {
    const form = document.createElement('form');
    form.method = method === URLMethod.GET || method === URLMethod.POST ? method : URLMethod.POST;
    form.action = path;
    form.insertAdjacentHTML('beforeend', window.serverData.csrfToken);
    form.insertAdjacentHTML('beforeend', `<input hidden name="_method" value="${method}" />`);

    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = data[key];

        form.appendChild(hiddenField);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }

  static getValidateStatus(name) {
    for (const key in window.serverData.validationErrors) if (key === name) return 'error';
    return '';
  }

  static getValidateError(name) {
    for (const key in window.serverData.validationErrors) {
      if (key === name && window.serverData.validationErrors[key].length) {
        const message = window.serverData.validationErrors[key][0];
        return message;
      }
    }
    return null;
  }

  static getOldValue(name, type) {
    for (const key in window.serverData.old)
      if (key === name) {
        if (window.serverData.old[key] && window.serverData.old[key] !== 'undefined') {
          return FormService.parseValue(window.serverData.old[key], type);
        }
      }
    return FormService.parseValue(null, type);
  }

  static parseValue(value, type = OldValueType.TEXT) {
    switch (type) {
      case OldValueType.BOOL:
        return value ? value == 'true' : false;
      case OldValueType.NUMBER:
        return value ? (isNaN(value) ? 0 : Number(value)) : 0;
    }
    return value;
  }
}

export const OldValueType = {
  BOOL: 'BOOL',
  NUMBER: 'NUMBER',
  TEXT: 'TEXT',
};
