class RouletteViewEvents {

    static spinMethod;
    static selectStakeMethod;
    static selectColorMethod;
    static color;


    static setSpinEvents(spin){
        RouletteViewEvents.spinMethod = spin;
    }

    static spinTrigger() {
        if(RouletteViewEvents.spinMethod) RouletteViewEvents.spinMethod();
    }
    static setColor(color) {
        RouletteViewEvents.color = color;
    }

    static getColor() {
        return RouletteViewEvents.color;
    }

}


export default RouletteViewEvents;
