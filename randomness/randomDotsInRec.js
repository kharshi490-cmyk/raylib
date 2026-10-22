const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "randomDotsInRectangle",
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
    for (let i = 0; i < 100; i++) {
        x.push(Math.random() * 200 + 50);
        y.push(Math.random() * 200 + 50);
    }
    return { x, y };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(50, 50, 200, 200, r.BLACK);
    for (let i = 0; i < world.randomPoints.x.length; i++) {
        r.DrawCircle(world.randomPoints.x[i], world.randomPoints.y[i], 5, r.RED);
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