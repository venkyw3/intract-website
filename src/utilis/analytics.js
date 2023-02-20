import Posthog from 'posthog-js'


export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID ?? '';
export const PH_TRACKING_ID = process.env.NEXT_PUBLIC_PH_TRACKING_ID ?? '';

export const initGA = () => {
  Posthog.init(PH_TRACKING_ID, { api_host: 'https://app.posthog.com' })
};

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  window.gtag('config', GA_TRACKING_ID, {
    page_path: window.location.pathname
  });
};



export const logEvent = (action, { event_category, event_label, value }) => {
  if (!action) return;
  window.gtag('event', action, {
      event_category,
      event_label,
      value
  });
  Posthog.capture(action, { 
    event_category,
    event_label,
    value
  })
};


export const logUser = (email) => {
  if(email){
    Posthog.identify(email);
    Posthog.people.set({email});
  }
}


