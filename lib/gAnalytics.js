import ReactGA from "react-ga";

const GoogleAnalyticsId = "UA-112999137-5";

class AnalyticsInternal {
  constructor() {
    ReactGA.initialize(GoogleAnalyticsId);
  }

  logPageView(url) {
    ReactGA.pageview(url);
  }

  logEvent(action, username) {
    ReactGA.event({
      category: 'User',
      action: action,
      label: username
    })
  }
}

export const Analytics = new AnalyticsInternal();