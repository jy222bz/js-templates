
/**
 * This function should conduct the computations with the source value 
 * to convert it to a new value that represnts a different messaurment.
 * 
 * The code must satsify the following in irder to be accepted:
 * The function must be named 'convert' and accepts one parameter.
 * The function must use Column Reference Syntax to accsess the varaible 'value' in the passed argument to obtain the source value.
 * The function must NOT import or require any external llibraries.
 * The function must NOT use any File Systems.
 * The function must NOT use console.log
 * The function must NOT use Arrow Functions (=>).
 * The function must return the result as Number Type.
 * 
 * @param {JSON} input the input that comes from the source channel.
 * @return {number} The computed value. 
 */

function convert(input) {

    // Accessing the property 'value' by using Column Reference Syntax to 
    // get the original value which is a Number Type by DEFAULT. 
    var originalValue = input['value']

    // Defining the variable for the output.
    var result = 0

    // From this point and on, the user starts write its own Code!



    // Returning the result as Number Type. 
    return result
}