const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "pattern",
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
    const target = r.LoadRenderTexture(30, 60);
    const vector1 = {
        x: 0,
        y: 60,
    }
    const vector2 = {
        x: 30,
        y: 60,
    }
    const vector3 = {
        x: 30,
        y: 30,
    }
    const vector4 = {
        x: 0,
        y: 0,
    }
    const vector5 = {
        x: 0,
        y: 30,
    }
    const vector6 = {
        x: 30,
        y: 0,
    }

    r.BeginTextureMode(target);
    r.ClearBackground(r.BLUE);
    r.DrawTriangle(vector1, vector2, vector3, r.WHITE);
    r.DrawTriangle(vector4, vector5, vector6, r.WHITE);
    r.EndTextureMode();

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    for (let i = 0; i < 5; i++) {
        const y = target.texture.height * i;
        for (let j = 0; j < 10; j++) {
            const x = target.texture.width * j;
            r.DrawTexture(target.texture, x, y, r.WHITE);
        }
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