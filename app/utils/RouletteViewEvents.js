/**
 * Observer-like
 * (for testing purpose only)
 */
class RouletteViewEvents {

    static spinMethod;

    static setSpinEvents(spin){
        RouletteViewEvents.spinMethod = spin;
    }

    static spinTrigger() {
        if(RouletteViewEvents.spinMethod)
            RouletteViewEvents.spinMethod();
    }

}


export default RouletteViewEvents;