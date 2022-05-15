/*
 * @Author: TTFZippo
 * @Date: 2021-11-16 20:02:55
 * @LastEditors: TTFZippo
 * @LastEditTime: 2021-11-16 20:25:38
 * @Description: 
 */
import {Alert} from '../libs/MyUI';

;((doc) => {
  const onShowAlert: HTMLElement = doc.querySelector("#showAlert");

  const alert = Alert.create({
    headerTitle: '这是我的第2个alert',
    alertText: '这是我的第2个alert'
  });


  const init = (): void => {
    bindEvent()
  }

  function bindEvent(): void {
    onShowAlert.addEventListener('click', showAlert, false);
  }

  function showAlert(): void {
    alert.show('warning', {
      headerTitle: '这是第二个title',
      alertText: '这是第二个alert'
    })
  }

  init();
})(document)