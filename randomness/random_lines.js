const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "random_lines",
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
    const randomPoints = [];
    for (let i = 0; i < 100; i++) {
        randomPoints.push(Math.random() * 800);
    }
    return randomPoints;
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    for (const x of world.randomPoints) {
        r.DrawLine(x, 0, x, 800, r.WHITE);
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