import { IAlertOptions } from "./typings";
import Template from "./Template";
/*
 * @Author: TTFZippo
 * @Date: 2021-11-16 20:07:17
 * @LastEditors: TTFZippo
 * @LastEditTime: 2021-11-16 20:41:25
 * @Description: 
 */
class Alert extends Template {
  private _headerTitle: string;
  private _alertText: string;

  constructor(options: IAlertOptions) {
    super();
    this._headerTitle = options.headerTitle || 'This is my Alert';
    this._alertText = options.alertText || 'This is my content';
    this.render();
  }

  private render() {
    document.body.appendChild(this.alertView({
      headerTitle: this._headerTitle,
      alertText: this._alertText
    }))
  }

  public static create(options: IAlertOptions) {
    return new Alert(options);
  }

  public show(type: string, options: IAlertOptions) {
    console.log(type, options);
  }
}

export default Alert;