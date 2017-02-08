/*
    primitiveMultiplty() is a given function that
    multiplies two numbers in 50% of the cases and
    in the others throws a MultiplicatorUnitFailure
    exception.

    Define a function that retries the primitiveMultiply()
    untill success.
*/


function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    for(;;){  
        try{
            return primitiveMultiply(a, b)
        } catch(e){
            if(!(e instanceof MultiplicatorUnitFailure))
            throw e;
        }
    }
}