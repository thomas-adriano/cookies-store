import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseFunctions } from 'src/core/functions/firebase';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseFunctions.getConfigs()),
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
