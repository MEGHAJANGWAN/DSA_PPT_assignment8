let buddyStrings = function(s, goal) {
    let differCount = 0, s1 = '', s2 = '';
    if (s.length > 1 && s.length === goal.length) {
        for (let i = 0; i < s.length; i++) {
            // check if elements are the same
            if (s[i] !== goal[i]) {
                differCount++;
                if (differCount > 2) return false;
                s1 = s1 + s[i], s2 = goal[i] + s2;
            } 
        }
        if (differCount === 0) {
            if (new Set(s).size < s.length) return true; // when s === goal
        } else if (s1 === s2) return true; // when s !== goal
    }
    return false;
};