module.exports=function(e){var r=String(e).split("."),n=Number(r[0])==e&&r[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":n>=3&&n<=10?"few":n>=11&&n<=99?"many":"other"}