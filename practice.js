const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "practice",
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
    const source = {
        x: 10,
        y: 10,
        width: 190,
        height: -190
    };
    const source2 = {
        x: 10,
        y: 10,
        width: -190,
        height: -190
    };
    const source3 = {
        x: 10,
        y: 10,
        width: -190,
        height: 190
    };

    // r.BeginTextureMode(target);
    // // r.ClearBackground(r.BLUE);
    // r.DrawCircle(world.x, world.y, 5, r.WHITE);
    // r.EndTextureMode();


    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();

    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    // r.DrawTexture(target.texture, 300, 50, r.WHITE);
    // r.DrawTexture(target.texture, 550, 50, r.WHITE);
    r.DrawTextureRec(
        target.texture,
        source,
        { x: 50, y: 300 },
        r.WHITE,
    );
    r.DrawTextureRec(
        target.texture,
        source2,
        { x: 300, y: 300 },
        r.WHITE,
    );
    r.DrawTextureRec(
        target.texture,
        source3,
        { x: 550, y: 300 },
        r.WHITE,
    );

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