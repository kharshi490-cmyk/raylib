const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "wave",
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
    r.DrawCircle(10, 10, 5, r.WHITE);
    r.EndTextureMode();

    let x = 0;
    let y = 0;

    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);
    for (let i = 0; i < 361; i++) {
        x++;
        y = -100 * Math.sin((i * Math.PI / 180) * 2);
        if (i % 3 === 0)
            r.DrawTexture(target.texture, x + 100, y + 100, r.WHITE);
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