import * as classnames from 'classnames';

export default class StringService {
  static logicConcat() {
    return classnames(...arguments);
  }
}
