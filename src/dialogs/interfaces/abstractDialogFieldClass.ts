/**
 * This is abstract controller for DialogField components
 * @memberof miqStaticAssets.dialog
 * @ngdoc controller
 * @name DialogFieldClass
 */
export abstract class DialogFieldClass {

  public field: any;
  public onUpdate: any;
  public options: any;
  public inputDisabled: boolean;
    /*@ngInject*/
  constructor() {
  }
}
