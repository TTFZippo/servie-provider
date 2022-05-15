import { IAlertOptions } from "./typings";

/*
 * @Author: TTFZippo
 * @Date: 2021-11-16 20:27:13
 * @LastEditors: TTFZippo
 * @LastEditTime: 2021-11-16 20:40:15
 * @Description: 
 */
class Template {
  protected alertView(options: IAlertOptions) {
    const {headerTitle, alertText} = options;
    const oAlert: HTMLElement = document.createElement('div');
    oAlert.className = 'alert hide';
    oAlert.innerHTML = `
      <div class="inner">
        <header class="alertHeader">
          <h1>${ headerTitle }</h1>
          <span class="icon">&times;</span>
        </header>
        <div class="alert-wrap">
          <p>${ alertText }</p>
        </div>
      </div>
    `
    return oAlert;
  }
  constructor() {

  }
}

export default Template;