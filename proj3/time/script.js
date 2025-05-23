//console.log("paperjs version:"+version);

var AnimatedGradient = function(target, from, to, steps) {
    this.target = target;
    this.from = from;
    this.to = to;
    this.steps = steps;
    //create gradient
    var c0 = RandomUtil.pickRandom(Config.colors);
    var c1 = RandomUtil.pickRandom(Config.colors, [c0]);
    this.colors = [c0, c1];
    //
    this.animateIndex = Math.random() < .5 ? 0 : 1;
    this.startFade();
    //
    this.draw();
}
AnimatedGradient.prototype.startFade = function() {
    this.animateIndex = 1 - this.animateIndex;//switch sides
    this.source = this.colors[this.animateIndex];
    this.goal = RandomUtil.pickRandom(Config.colors, this.colors);
    this.step = 0;
}
AnimatedGradient.prototype.update = function() {
    this.step++;
    var r = this.step / this.steps;
    r = ClassicEase.ease(r, 0, 1, 1, 100);
    var c = ColorUtil.interpolate(this.source, this.goal, r);
    this.colors[this.animateIndex] = c;
    this.draw();
    //
    if (this.step >= this.steps) {
        this.colors[this.animateIndex] = this.goal;
        this.startFade();
    }
}
AnimatedGradient.prototype.draw = function() {
    var gradient = new Gradient(this.colors);
    var gradientColor = new GradientColor(gradient, this.from, this.to);
    this.target.fillColor = this.target.strokeColor = gradientColor;
}
//
var Node = function(id, parentNode, pos, size, horizontal) {
    this.id = id;
    this.left = null;
    this.right = null;
    this.size = size;
    this.pos = pos;
    this.horizontal = horizontal;
    this.parentNode = parentNode;
    this.createPath();
}
Node.prototype.createPath = function() {
    this.path = new Path.Rectangle(this.pos, this.size);
    this.path.node = this;
    //create gradient
    var dest = this.horizontal ? new Point(this.pos.x + this.size.width, this.pos.y) : new Point(this.pos.x, this.pos.y + this.size.height)
    this.gradient = new AnimatedGradient(this.path, this.pos, dest, Config.fadeDuration);
}
Node.prototype.split = function() {
    var size = this.size.clone();
    var horizontal = Math.random() < .5;
    if (horizontal) size.width /= 2;
    else size.height /= 2;
    //
    var pos = this.pos.clone();
    this.left = new Node(this.id + "_0", this, pos, size, horizontal);
    var pos2 = horizontal ? new Point(pos.x + size.width, pos.y) : new Point(pos.x, pos.y + size.height);
    this.right = new Node(this.id + "_1", this, pos2, size, horizontal);
    this.clear();
}
Node.prototype.rejoin = function() {
    if (this.left) this.left.destroy();
    if (this.right) this.right.destroy();
    this.clear();
    this.createPath();
}
Node.prototype.clear = function() {
    if (this.path) this.path.remove();
    this.path = null;
}
Node.prototype.destroy = function() {
    this.clear();
    if (this.left) this.left.destroy();
    if (this.right) this.right.destroy();
}
Node.prototype.update = function() {
    if (this.left) this.left.update();
    if (this.right) this.right.update();
    if (this.path) this.gradient.update();
}

function reset() {
    if (tree) tree.destroy();
    tree = new Node("T", null, new Point(0, 0), view.getViewSize(), "H");
}

//process config:
for (var i = 0; i < Config.colors.length; i++) Config.colors[i] = new Color(Config.colors[i]);


var lastSplit;
function onMouseUp(e) {
    var now = Date.now();
    if (lastSplit && now - lastSplit < 250) return;
    var pos = e.point * devicePixelRatio;
    lastSplit = now;
    //
    var hitResult = project.hitTest(pos);
    if (hitResult && hitResult.item) {
        var node = hitResult.item.node;
        if (node) {
            if ((node.size.width * node.size.height) / (tree.size.width * tree.size.height) < Config.minArea) node.parentNode.rejoin();
            else node.split();
        }
    }
    return false;
}

function onFrame(e) {
    if (tree) tree.update();
}


var viewSize;
window.onresize = function() {
    var w = window.innerWidth, h = window.innerHeight, s = window.devicePixelRatio;
    if (!viewSize || viewSize.width != w || viewSize.height != h) {
        const ws = Math.ceil(w * s), hs = Math.ceil(h * s);
        var canvas = document.getElementById("myCanvas");
        canvas.getContext('2d').scale(s, s);
        canvas.width = ws;
        canvas.height = hs;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        viewSize = new Size(ws, hs);
        view.setViewSize(ws, hs);
        reset();
    }
}

//init
var tree;
onresize();