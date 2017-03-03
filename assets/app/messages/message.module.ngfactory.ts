/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './message.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/forms/src/directives';
import * as import4 from '@angular/forms/src/form_providers';
import * as import5 from '@angular/common/src/localization';
import * as import6 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import7 from './message.service';
import * as import8 from '@angular/core/src/di/injector';
import * as import9 from '@angular/core/src/i18n/tokens';
import * as import10 from '@angular/http/src/http';
import * as import11 from '../errors/error.service';
class MessageModuleInjector extends import0.NgModuleInjector<import1.MessageModule> {
  _CommonModule_0:import2.CommonModule;
  _InternalFormsSharedModule_1:import3.InternalFormsSharedModule;
  _FormsModule_2:import4.FormsModule;
  _MessageModule_3:import1.MessageModule;
  __NgLocalization_4:import5.NgLocaleLocalization;
  __RadioControlRegistry_5:import6.RadioControlRegistry;
  __MessageService_6:import7.MessageService;
  constructor(parent:import8.Injector) {
    super(parent,[],[]);
  }
  get _NgLocalization_4():import5.NgLocaleLocalization {
    if ((this.__NgLocalization_4 == (null as any))) { (this.__NgLocalization_4 = new import5.NgLocaleLocalization(this.parent.get(import9.LOCALE_ID))); }
    return this.__NgLocalization_4;
  }
  get _RadioControlRegistry_5():import6.RadioControlRegistry {
    if ((this.__RadioControlRegistry_5 == (null as any))) { (this.__RadioControlRegistry_5 = new import6.RadioControlRegistry()); }
    return this.__RadioControlRegistry_5;
  }
  get _MessageService_6():import7.MessageService {
    if ((this.__MessageService_6 == (null as any))) { (this.__MessageService_6 = new import7.MessageService(this.parent.get(import10.Http),this.parent.get(import11.ErrorService))); }
    return this.__MessageService_6;
  }
  createInternal():import1.MessageModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._InternalFormsSharedModule_1 = new import3.InternalFormsSharedModule();
    this._FormsModule_2 = new import4.FormsModule();
    this._MessageModule_3 = new import1.MessageModule();
    return this._MessageModule_3;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_1; }
    if ((token === import4.FormsModule)) { return this._FormsModule_2; }
    if ((token === import1.MessageModule)) { return this._MessageModule_3; }
    if ((token === import5.NgLocalization)) { return this._NgLocalization_4; }
    if ((token === import6.RadioControlRegistry)) { return this._RadioControlRegistry_5; }
    if ((token === import7.MessageService)) { return this._MessageService_6; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const MessageModuleNgFactory:import0.NgModuleFactory<import1.MessageModule> = new import0.NgModuleFactory(MessageModuleInjector,import1.MessageModule);