import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather';
  fetchedData: any = '';
  fetchedWeather = false;
  async searchFunc(str: string) {
    if (str === '') return;
    await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${environment.apiKey}&q=${str}`
    )
      .then((response: any) => {
        return response.json();
      })
      .then((data: any) => (this.fetchedData = data));

    console.log(this.fetchedData);
  }
}
