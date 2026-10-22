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
    for (let i = 0; i < 100; i++) {
        const j = Math.random() * 360;
        const radians = j * Math.PI / 180;
        x.push(Math.random() * 100 * Math.cos(radians) + 200);
        y.push(Math.random() * 100 * Math.sin(radians) + 200);
    }
    return { x, y };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    const { randomPoints } = world;

    r.DrawCircle(200, 200, 100, r.RED);
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