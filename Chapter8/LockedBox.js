/*
    The object box is given. Define a function
    withBoxUnlocked() that takes a function value
    as argument, unlocks the box, starts the function
    and after that guarantees that the box is locked
    again.
*/


var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    box.unlock();
    try {
        return body();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);   //#=> true