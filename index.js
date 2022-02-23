function receivesAFunction(spy) {
    spy ();
}

function before () {
    return 'Hello';
}

function returnsANamedFunction () {
    return before;
}

function returnsAnAnonymousFunction () {
    return () => 'Adios';
}