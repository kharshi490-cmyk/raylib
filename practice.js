const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "practice",
        FPS: 50,
    }

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.FPS);

    const world = {
        screen,
    }
    return world;
}

function draw(world) {
    const target = r.LoadRenderTexture(200, 200);

    r.BeginTextureMode(target);

    r.ClearBackground(r.PINK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircleSector({ x: 100, y: 100 }, 100, 0, 120, 150, r.ORANGE);
    r.DrawCircleSector({ x: 100, y: 100 }, 100, 120, 240, 150, r.WHITE);
    r.DrawCircleSector({ x: 100, y: 100 }, 100, 240, 360, 150, r.GREEN);
    r.DrawCircle(100, 100, 15, r.BLUE);

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