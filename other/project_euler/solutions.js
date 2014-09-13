/* Question 1 */
var q1 = function(maxnum) {
    var bucket = [];
    var sum = 0;
    for (i=1; i<maxnum; i++) { bucket.push(i); }
    bucket = bucket.filter(function(val) { return (val % 3 === 0 || val % 5 === 0) });
    for (var idx in bucket) { sum += bucket[idx]; }
    return sum;
}

$("#a1").html(q1(1000));
$("#a1").removeClass("unsolved").addClass("solved");

/* Question 2 */
var q2 = function(maxnum) {
    var fibs = [1,2];
    var sum = 0;
    do { fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]); } while ( fibs[fibs.length - 1] < maxnum );
    for (var idx in fibs) { if (fibs[idx] % 2 === 0) { sum += fibs[idx]; } }
    return sum;
}

$("#a2").html(q2(4000000));
$("#a2").removeClass("unsolved").addClass("solved");
/* Question 3 */
var q3 = function(myNum) {

    var isPrime = function(num) {
        var isPrime = true;
        for (i=2; i < num; i++) { if (num % i === 0) { isPrime = false; break; } }
        return isPrime;
    };
    
    var getPrimeFactors = function(num) {
        var bucket = [];
        for (i=2; i < 1000000; i++) { if (num % i === 0) { bucket.push(i); } }
        return bucket.filter(function(val){ return isPrime(val); });
    };

    return getPrimeFactors(myNum).join(", ");
}

$("#a3").html(q3(600851475143));
$("#a3").removeClass("unsolved").addClass("solved");
