function solve() {
    var t = "select",
        e = "The element must be a SELECT",
        a = "<div />",
        n = "option",
        d = "dropdown-list",
        o = "current",
        r = "options-container",
        l = "position",
        i = "absolute",
        s = "data-value",
        c = "data-index",
        h = "dropdown-item",
        p = "click",
        v = ".current",
        u = "display",
        m = "none",
        f = "Select a value",
        w = ".dropdown-item";
    return function(C) {
        var b = $(C);
        if (!b.is(t)) throw new Error(e);
        var E = b.find(n),
            T = $(a).addClass(d),
            x = $(a).addClass(o);
        T.append(x);
        var S = $(a).addClass(r).hide().css(l, i);
        E.each(function(t, e) {
            var n = $(e);
            t === b.get(0).selectedIndex && x.html(n.html()).attr(s, n.val()), $(a).addClass(h).html(n.html()).attr(s, n.val()).attr(c, t).appendTo(S)
        }), T.append(S), b.before(T), T.prepend(b), T.on(p, v, function() {
            S.css(u) === m ? (S.show(), x.html(f)) : S.hide()
        }), T.on(p, w, function() {
            var t = $(this);
            x.html(t.html()).attr(s, t.val()), b.val(t.attr(s)), S.hide()
        }), b.hide()
    }
}
