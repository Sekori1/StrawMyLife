(function(e) {
    e.fn.rotator = function(n) {
        function f() {
            u.stop().fadeOut(r.transition_speed, function() {
                if (i == o) {
                    u = s.first();
                    i = 0
                } else u = u.next();
                u.fadeIn(r.transition_speed);
                i++;
                setTimeout(f, r.speed)
            })
        }
        var r = e.extend({}, t, n);
        var i = 1;
        var s = this.children(r.sub_selector);
        var o = s.length;
        s.hide();
        var u = s.first();
        var a = this;
        u.fadeIn();
        setTimeout(f, r.speed);
        return this
    };
    var t = e.fn.defaults = {
        speed: 3e3,
        transition_speed: 500,
        sub_selector: ".rotate"
    }
})(jQuery)