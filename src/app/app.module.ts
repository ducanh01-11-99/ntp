import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginPage} from "./layout/login/login.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {NgOptimizedImage, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {MyInputDirective} from "./components/InputCustom/inputCustom.component";
import {NzSelectModule} from "ng-zorro-antd/select";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MyCounterComponent} from "./layout/identifiComponent/my-counter.component";
import {Store, StoreModule} from "@ngrx/store";
import {counterReducer} from "./layout/identifiComponent/counter.reducer";
import {NzDemoLayoutCustomTriggerComponent} from "./layout/SidebarLayout/layoutlogged.component";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import { TokenInterceptor } from './services/interceptors';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {SourceManagementComponent} from "./layout/sourceManagement/sourceManagement.component";
import {VersionManagementComponent} from "./layout/versionManagement/versionManagement.component";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzAvatarModule} from "ng-zorro-antd/avatar";

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    MyInputDirective,
    MyCounterComponent,
    NzDemoLayoutCustomTriggerComponent,
    SourceManagementComponent,
    VersionManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en-US',
    }),
    StoreModule.forRoot({count: counterReducer}),
    AppRoutingModule,
    NzBreadCrumbModule,
    NzTabsModule,
    NzTableModule,
    NzToolTipModule,
    NzPopoverModule,
    NgOptimizedImage,
    NzImageModule,
    NzAvatarModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    Store,
    TokenInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
