/**
 * Observer-like
 *
 */
class RouletteViewEvents {

    static spinMethod;

    static setSpinEvents(spin){
        RouletteViewEvents.spinMethod = spin;
    }

    static spinTrigger(number) {
        if(RouletteViewEvents.spinMethod)
            RouletteViewEvents.spinMethod(number);
    }

}


export default RouletteViewEvents;