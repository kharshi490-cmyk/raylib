const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "reusable picture",
        FPS: 50,
    }
    const x = 20;
    const y = 20;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.FPS);

    const world = {
        screen,
        x,
        y,
    }
    return world;
}

function draw(world) {
    const target = r.LoadRenderTexture(200, 200);
    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawRectangle(50, 50, 100, 100, r.BLUE);
    r.DrawRectangleLines(50, 50, 100, 100, r.WHITE);
    r.DrawCircle(100, 100, 15, r.RED);
    r.DrawCircleLines(100, 100, 15, r.BLACK);
    r.EndTextureMode();

    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTexture(target.texture, 300, 50, r.WHITE);
    r.DrawTexture(target.texture, 550, 50, r.WHITE);

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