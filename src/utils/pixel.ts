export const PIXEL_TYPE_OPTIONS = [
    {
        name: "1x1 Round Tile",
        number: 98138,
    },
    {
        name: "1x1 Round Plate",
        number: 4073,
    },
    {
        name: "1x1 Square Tile",
        number: "3070b",
    },
    {
        name: "1x1 Square Plate",
        number: 3024,
    },
    {
        name: "1x1 Square Brick",
        number: 3005,
    },
    {
        name: "Variable Tile",
        number: "variable_tile",
    },
    {
        name: "Variable Plate",
        number: "variable_plate",
    },
    {
        name: "Variable Brick",
        number: "variable_brick",
    },
];


export const PIXEL_TYPE_TO_FLATTENED = {
    "98138": "98138",
    "4073": "98138",
    "3024": "3070b",
    "3070b": "3070b",
    "3005": "3070b",
    "variable_tile": "variable_tile",
    "variable_plate": "variable_tile",
    "variable_brick": "variable_tile",
};

export const drawPixel = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, pixelHex: string, strokeHex: string, pixelType: string) => {
    ctx.beginPath();
    if ([PIXEL_TYPE_OPTIONS[0].number, PIXEL_TYPE_OPTIONS[1].number].includes(pixelType)) {
        // draw a circle
        ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
    } else {
        // draw a square
        ctx.rect(x, y, 2 * radius, 2 * radius);
    }
    ctx.fillStyle = pixelHex;
    ctx.fill();
    ctx.strokeStyle = strokeHex;
    if (!("" + pixelType).match("^variable.*$")) {
        // TODO: Look at perf?
        ctx.stroke();
    }
    if (
        [
            PIXEL_TYPE_OPTIONS[1].number,
            PIXEL_TYPE_OPTIONS[3].number,
            PIXEL_TYPE_OPTIONS[4].number,
            PIXEL_TYPE_OPTIONS[6].number,
            PIXEL_TYPE_OPTIONS[7].number,
        ].includes(pixelType)
    ) {
        // draw a circle on top of the piece to represent a stud
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius * 0.6, 0, 2 * Math.PI);
        ctx.stroke();
    }
}