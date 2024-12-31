"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 10;
console.log(a);
var b = "ali";
console.log(b);
var names = ["ali", "hassan", "hany"];
console.log(names);
names.push("nour");
console.log(names);
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
var arr = [4, "ali", "osama", true, 3];
console.log(arr);
var myArray = ["hany", "car", 2];
console.log(myArray);
myArray.push("ali");
console.log(myArray);
var newArrray = [1, 2, 3, 4, "ali", "hany", ["mohamed", "hassan"]];
var myClass = ["mona", 1, true];
console.log(myClass);
var one = ["ali", 2, false];
console.log(one);
var two = ["mohamed", 3, true];
console.log(two);
var car = {
    color: "red",
    price: 300,
    modal: "bmw",
};
console.log(car);
var my = {
    color: "red",
    price: 20,
    modal: "bmw",
    year: 2024
};
console.log(my);
var myCar = {
    color: "red",
    price: 500,
    modal: "fiat",
    year: 2002,
    sayHello: function () {
        return ("hello , ".concat(this.color));
    },
    calcNum: function (n) {
        return n * 5;
    }
};
console.log(myCar);
var mine = {
    color: "red",
    price: 300,
    modal: "lancer",
    year: 2002
};
console.log(mine);
var iam = {
    color: "red",
    price: 300,
    modal: "lancer",
    year: 2002
};
console.log(iam);
var mySet = {
    name: "mohamed",
    color: "red",
    year: 2024
};
function calcSum(num1, num2) {
    return num1 + num2;
}
console.log(calcSum(4, 5));
function calcNumber(num1, num2) {
    if (num1 === void 0) { num1 = 5; }
    return "".concat(num1 + num2);
}
console.log(calcNumber(4, 5));
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    nums.forEach(function (num) {
        result += num;
    });
    return result;
}
console.log(addAll(1, 2, 3, 4, 5, +true));
function showError(msg) {
    if (msg === void 0) { msg = "un"; }
    throw new Error(msg);
}
try {
    showError("hello");
}
catch (error) {
    console.log(error);
}
var str1 = "hello";
if (typeof str1 == "string") {
    var newStr = str1.toUpperCase();
    console.log(newStr);
}
function reverse(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverse(["ali", "hany", "mohamed"]));
function multipleTypes(valueOne, valueTwo) {
    return "the first value is ".concat(valueOne, " , and the second value is ").concat(valueTwo);
}
console.log(multipleTypes("ali", 100));
function myumber() {
    return 3;
}
var Instagram = (function () {
    function Instagram(value) {
        this.value = value;
    }
    Instagram.prototype.show = function (msg) {
        console.log("".concat(msg, " ").concat(this.value));
    };
    return Instagram;
}());
var insOne = new Instagram("Ghareeb");
console.log(insOne.value);
insOne.show("hany");
var insTwo = new Instagram(100);
console.log(insTwo.value);
insTwo.show("play");
var kids;
(function (kids) {
    kids[kids["one"] = 10] = "one";
    kids[kids["two"] = 15] = "two";
    kids[kids["three"] = 20] = "three";
})(kids || (kids = {}));
var level;
(function (level) {
    level[level["Kids"] = 15] = "Kids";
    level[level["Easy"] = 10] = "Easy";
    level[level["Medium"] = 6] = "Medium";
    level[level["Hard"] = myumber()] = "Hard";
    level[level["Insane"] = 100] = "Insane";
})(level || (level = {}));
var lv1 = "Easy";
if (lv1 === "Easy") {
    console.log("the level is ".concat(lv1, " and number of seconds is ").concat(level.Easy));
}
var data = "1000";
console.log(data.repeat(3));
var User = (function () {
    function User(username, salary) {
        this.u = username,
            this.s = salary;
        this.msg = function () {
            return "hello ".concat(this.u, " your salary is ").concat(this.s);
        };
    }
    User.prototype.sayMsg = function () {
        return "hello ".concat(this.u, " your salary is ").concat(this.s);
    };
    return User;
}());
var useOne = new User("ali", 5000);
console.log(useOne.u);
console.log(useOne.s);
console.log(useOne.msg());
console.log(useOne.sayMsg());
var Admin = (function () {
    function Admin(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return "hello ".concat(this.username, " your salary is ").concat(this.salary);
        };
    }
    Admin.prototype.sayMsg = function () {
        return "hello ".concat(this.username, " your salary is ").concat(this.salary);
    };
    Object.defineProperty(Admin.prototype, "name", {
        get: function () {
            return this.username;
        },
        set: function (value) {
            this.username = value;
        },
        enumerable: false,
        configurable: true
    });
    return Admin;
}());
var adminOne = new Admin("ali", 5000, "cairo");
console.log(adminOne.name);
adminOne.name = "ali";
console.log(adminOne.address);
console.log(adminOne.msg());
console.log(adminOne.sayMsg());
var Loog = (function () {
    function Loog(username) {
        this.username = username;
        Loog.created++;
    }
    Loog.getCount = function () {
        console.log("".concat(this.created, " objects created"));
    };
    Loog.created = 0;
    return Loog;
}());
var u1 = new Loog("ali");
var u2 = new Loog("hany");
var u3 = new Loog("hassan");
Loog.getCount();
var Facebook = (function () {
    function Facebook(username, theme) {
        this.username = username;
        this.theme = theme;
    }
    Facebook.prototype.save = function () {
        console.log("saved");
    };
    Facebook.prototype.update = function () {
        console.log("update");
    };
    return Facebook;
}());
var f1 = new Facebook("mohamed", true);
console.log(f1.username);
f1.save();
var Food = (function () {
    function Food(title) {
        this.title = title;
    }
    return Food;
}());
var Pizza = (function (_super) {
    __extends(Pizza, _super);
    function Pizza(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    Pizza.prototype.getCookingTime = function () {
        console.log("cooking pizza");
    };
    return Pizza;
}(Food));
var Burger = (function (_super) {
    __extends(Burger, _super);
    function Burger(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    Burger.prototype.getCookingTime = function () {
        console.log("cooking burger");
    };
    return Burger;
}(Food));
var pizzaOne = new Pizza("mushrom", 100);
console.log(pizzaOne.title);
var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.attack = function () {
        console.log("iam attacking now");
    };
    return Player;
}());
var Amozan = (function (_super) {
    __extends(Amozan, _super);
    function Amozan(name, spears) {
        var _this = _super.call(this, name) || this;
        _this.spears = spears;
        return _this;
    }
    Amozan.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("attacking with spears");
        this.spears -= 1;
    };
    return Amozan;
}(Player));
var Barbearn = (function (_super) {
    __extends(Barbearn, _super);
    function Barbearn(name, axeDurabilty) {
        var _this = _super.call(this, name) || this;
        _this.axeDurabilty = axeDurabilty;
        return _this;
    }
    Barbearn.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("attacking with axe");
        this.axeDurabilty -= 1;
    };
    return Barbearn;
}(Player));
var barOne = new Barbearn("hassan", 100);
console.log(barOne.name);
var Collection = (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
var itemOne = new Collection();
itemOne.add({ itemType: "book", title: "spider", isbn: 2 });
itemOne.add({ itemType: "book", title: "follow your heart", isbn: 3 });
console.log(itemOne);
var itemTwo = new Collection();
itemTwo.add({ itemType: "book", title: "spider", style: "wavy", price: 500 });
//# sourceMappingURL=index.js.map