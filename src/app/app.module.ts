import { SupplyService } from './shared/services/supply.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { SaleService } from './shared/services/sale.service';
import { UserServiceService } from './shared/services/user-service.service';
import { AuthenticationCodeService } from './shared/services/authentication-code.service';
import { PassportModule } from './views/passport/passport.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { LocalStorageService } from './shared/services/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    PassportModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalStorageService,
    AuthenticationCodeService,
    UserServiceService,
    SaleService,
    CategoryService,
    ProductService,
    BarcodeScanner,
    Camera,
    ImagePicker,
    SupplyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
