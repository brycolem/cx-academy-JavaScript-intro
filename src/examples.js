
// loops
const bestfunction = function(self) {
    console.log(this);
}
const namesp = {
    function1: function(...params) {
        const { one, two } = params;
        const self = this;
        bestfunction.apply(this);
        // bestfunction(self);
        const childfunction = function () {
            console.log(this);
        }
        console.log(this);
    },

    another: () => { }
};

namesp.function1();
