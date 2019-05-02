class Dado
{

    //20% de las veces avanzaran 1 paso
    //20% retrocederan 1 paso
    //40% avanzarán 2 pasos
    //20% avanzarán 3 pasos
    constructor ()
    {
        this.cara=[-1, -1, 1, 1, 2, 2, 2, 2, 3, 3]
    }

    lanzar (cara)
    {
        return cara[Math.floor(Math.random()*(10))+1]
    }
    getEspacios()
    {
        return this.lados;
    }
}