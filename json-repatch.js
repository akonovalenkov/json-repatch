;(function(host) {
    'use strict';

    host.rePatch = function(obj) {
        if (!obj) return obj;
        var refs = [], ids = {};
        if (obj.$values) obj = ids[obj.$id] = obj.$values;
        _resolve(obj, ids, refs);
        for(var i = 0; i < refs.length; i++) 
            refs[i].obj[refs[i].prop] = ids[refs[i].$ref]; 
        return obj;
    }

    function _resolve(obj, ids, refs, parent, prop) {
        if (obj.$ref) {
            if (ids[obj.$ref] && parent) parent[prop] = ids[obj.$ref];
            else refs.push({ $ref: obj.$ref, prop: prop, obj: parent });
            return;
        }
        if (obj.$values) obj = parent[prop] = ids[obj.$id] = obj.$values;
        else ids[obj.$id] = obj; 
        var keys = Object.keys(obj);
        for(var i = 0; i < keys.length; i++) 
            if (obj[keys[i]] instanceof Object) 
                _resolve(obj[keys[i]], ids, refs, obj, keys[i]);
    }

})(JSON);
