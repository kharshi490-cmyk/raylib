const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "parallelogram",
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
    for (let i = 0; i < 200; i++) {
        const value = Math.random() * 250 + 50;
        const value2 = Math.random() * 260 + 10;
        y.push(value);
        x.push(Math.random() * 50 + value2);
    }
    return { x, y };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const { randomPoints } = world;
    const point1 = { x: 50, y: 50 };
    const point2 = { x: 300, y: 50 };
    const point3 = { x: 260, y: 300 };
    const point4 = { x: 10, y: 300 };


    r.DrawLineEx(point1, point2, 2, r.WHITE);
    r.DrawLineEx(point2, point3, 2, r.WHITE);
    r.DrawLineEx(point3, point4, 2, r.WHITE);
    r.DrawLineEx(point4, point1, 2, r.WHITE);

    // r.DrawCircle(0, 0, 300, r.RED);
    for (let i = 0; i < randomPoints.x.length; i++) {
        r.DrawCircle(randomPoints.x[i], randomPoints.y[i], 5, r.WHITE);
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