import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { WeatherDataService } from './services/weather-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoienNheWxvcnMiLCJhIjoiY2s3YXp1NjF3MTlvMDNrbzVtMGQ4ejRuciJ9.iJ3X8B9XMuz6n9ItNI_ExA',
      geocoderAccessToken: 'pk.eyJ1IjoienNheWxvcnMiLCJhIjoiY2s3YXp1NjF3MTlvMDNrbzVtMGQ4ejRuciJ9.iJ3X8B9XMuz6n9ItNI_ExA'
    })
  ],
  providers: [
    WeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
