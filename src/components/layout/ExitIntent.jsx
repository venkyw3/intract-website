import throttle from "lodash/throttle";

const ExitIntent = (options = {}) => {
    
    const defaultOptions = {
        threshold: 0,
        maxDisplays: 1,
        eventThrottle: 200,
        onExitIntent: () => {},
    };

    return (() => {
        const config = { ...defaultOptions, ...options };
        const eventListeners = new Map();
        let displays = 0;
        const addEvent = (eventName, callback) => {
            document.addEventListener(eventName, callback, false);
            eventListeners.set(`document:${eventName}`, { eventName, callback });
        };

        const removeEvent = (key) => {
            const { eventName, callback } = eventListeners.get(key);
            document.removeEventListener(eventName, callback);
            eventListeners.delete(key);
        };

        const shouldDisplay = (position, event) => {
            if (position <= config.threshold && displays < config.maxDisplays) {
                displays++;
                return true;
            }
            return false;
        };

        const mouseDidMove = (event) => {
            if (shouldDisplay(event.clientY, event)) {
                config.onExitIntent();
                if (displays >= config.maxDisplays) {
                    removeEvents();
                }
            }
        };

        const removeEvents = () => {
            eventListeners.forEach((value, key, map) => removeEvent(key));
        };

        addEvent("mousemove", throttle(mouseDidMove, config.eventThrottle));

        return removeEvents;
  })();
}


export default ExitIntent;