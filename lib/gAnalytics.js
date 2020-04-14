import ReactGA from "react-ga";

const GoogleAnalyticsId = "UA-112999137-5";

class AnalyticsInternal {
  constructor() {
    ReactGA.initialize(GoogleAnalyticsId);
  }

  logPageView(url) {
    ReactGA.pageview(url);
  }

  logEvent(username) {
    ReactGA.event({
      category: 'User',
      action: 'Search for instagram name',
      value: username,
    })
  }
}

export const Analytics = new AnalyticsInternal();