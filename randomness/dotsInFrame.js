const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "randomDotsInFrame",
        FPS: 50,
    }
    const randomPoints = getRandomPoints();

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.FPS);

    const world = {
        screen,
        randomPoints,
    }
    return world;
}

function getRandomPoints() {
    const x = [];
    const y = [];
    for (let i = 0; i < 1000; i++) {
        x.push(Math.random() * 800);
        y.push(Math.random() * 800);
    }
    return { x, y };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    const color = {
        r: 255,
        g: 255,
        b: 255,
        a: 150,
    }

    for (let i = 0; i < world.randomPoints.x.length; i++) {
        r.DrawCircle(world.randomPoints.x[i], world.randomPoints.y[i], 5, color);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup()
    loop(world);
}
main();