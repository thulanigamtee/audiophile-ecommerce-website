import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

function waitForStyles() {
  return new Promise<void>((resolve) => {
    const stylesheets = Array.from(document.styleSheets).filter((sheet) =>
      sheet.href?.includes('styles.css')
    );

    const checkLoaded = () => {
      if (stylesheets.every((sheet) => sheet.cssRules?.length > 0)) {
        resolve();
      } else {
        requestAnimationFrame(checkLoaded);
      }
    };

    checkLoaded();
  });
}

waitForStyles().then(() => {
  bootstrapApplication(AppComponent).catch((err) => console.error(err));
});
