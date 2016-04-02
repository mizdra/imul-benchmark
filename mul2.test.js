(function() {
    console.time('mul2');
    calc();
    console.timeEnd('mul2');
    
    function calc() {
        var seed = 0x00000000;
        var max = MAX_FRAME;
        for(var i = 0; i < max; i++)
            seed = u32(Math.imul(0x41C64E6D, seed) + 0x6073);
    }
    
    function u32(x) {
        return x >>> 0;
    }
})();