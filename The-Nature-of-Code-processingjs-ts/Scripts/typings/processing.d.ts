/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
/* tslint:disable: interface-name */

//declare var Processing: any;

// TODO: Create complete definitions
// http://www.codebelt.com/typescript/how-to-create-a-ambient-class-declarations-in-typescript-tutorial/
// TODO: Add JSDoc
// http://blog.icanmakethiswork.io/2014/05/typescript-jsdoc-and-intellisense.html
// TODO: Add PMatrix interface
// TODO: Add PConstants interface
// TODO: Add PMatrix2D, PMatrix3D (implement PMatrix)
// http://processing.org/reference/javadoc/core/

declare var Processing: Processing;
//declare var PVector: PVector;
declare var PShape: PShape;
declare var PImage: PImage;
declare var PGraphics: PGraphics;
declare var PFont: PFont;

declare class PVector {
    constructor();
    constructor(x: number, y: number);
    constructor(x: number, y: number, z: number);

    x: number;
    y: number;
    z: number;

    add(x: number, y: number, z: number): void;
    add(v: PVector): void;
    static add(v1: PVector, v2: PVector): PVector;
    static add(v1: PVector, v2: PVector, target: PVector): PVector;
    angleBetween(v1: PVector, v2: PVector): number;
    array(): number[];
    cross(v: PVector): PVector;
    cross(v: PVector, target: PVector): PVector;
    static cross(v1: PVector, v2: PVector, target: PVector): PVector;
    dist(v: PVector): number;
    static dist(v1: PVector, v2: PVector): number;
    div(n: number): void;
    static div(v: PVector, n: number): PVector;
    static div(v: PVector, n: number, target: PVector): PVector;
    dot(x: number, y: number, z: number): number;
    dot(v: PVector): number;
    static dot(v1: PVector, v2: PVector): number;
    static fromAngle(angle: number): PVector;
    static fromAngle(angle: number, target: PVector): PVector;
    get(target: number[]): number[];
    heading(): number;
    lerp(x: number, y: number, z: number, amt: number): void;
    lerp(v: PVector, amt: number): void;
    static lerp(v1: PVector, v2: PVector, amt: number): PVector;
    limit(max: number): void;
    mag(): number;
    magSq(): number;
    mult(n: number): void;
    static mult(v: PVector, n: number): PVector;
    static mult(v: PVector, n: number, target: PVector): PVector;
    normalize(): void;
    normalize(target: PVector): PVector;
    static random2D(): PVector;
    static random2D(target: PVector): PVector;
    static random3D(): PVector;
    static random3D(target: PVector): PVector;
    rotate(theta: number): void;
    set(source: number[]): void;
    set(x: number, y: number): void;
    set(x: number, y: number, z: number): void;
    set(v: PVector): void;
    setMag(len: number): void;
    setMag(target: PVector, len: number): PVector;
    sub(x: number, y: number, z: number): void;
    sub(v: PVector): void;
    static sub(v1: PVector, v2: PVector): PVector;
    static sub(v1: PVector, v2: PVector, target: PVector): PVector;
    toString(): string;
}

interface PShape {
    new (): PShape;

    width: number;
    height: number;

    isVisible: any;
    setVisible: any;
    disableStyle: any;
    enableStyle: any;
    getChild: any;
    translate: any;
    rotate: any;
    rotateX: any;
    rotateY: any;
    rotateZ: any;
    scale: any;
}

interface PImage {
    new (): PImage;
    new (width: number, height: number): PImage;
    new (width: number, height: number, format: number): PImage;
    new (img: any): PImage;

    width: number;
    height: number;
    pixels: any[];

    get: any;
    set: any;
    copy: any;
    mask: any;
    blend: any;
    filter: any;
    save: any;
    resize: any;
    loadPixels: any;
    updatePixels: any;
}

interface PGraphics {
    new (): PGraphics;
    new (width: number, height: number): PGraphics;
    new (width: number, height: number, applet: any): PGraphics;

    beginDraw: any;
    endDraw: any;
}

interface PFont {
    new (): PFont;
    new (input: any): PFont;

    PFont_list: any;
}

interface Processing {
    new (canvas: HTMLElement): Processing;
    new (canvas: HTMLElement, sketch: (p: Processing) => void): Processing;

    /*
     * Constants
     */
    X: number;
    Y: number;
    Z: number;

    R: number;
    G: number;
    B: number;
    A: number;

    U: number;
    V: number;

    NX: number;
    NY: number;
    NZ: number;

    EDGE: number;

    // Stroke
    SR: number;
    SG: number;
    SB: number;
    SA: number;

    SW: number;

    // Transformations (2D and 3D)
    TX: number;
    TY: number;
    TZ: number;

    VX: number;
    VY: number;
    VZ: number;
    VW: number;

    // Material properties
    AR: number;
    AG: number;
    AB: number;

    DR: number;
    DG: number;
    DB: number;
    DA: number;

    SPR: number;
    SPG: number;
    SPB: number;

    SHINE: number;

    ER: number;
    EG: number;
    EB: number;

    BEEN_LIT: number;

    VERTEX_FIELD_COUNT: number;

    // Renderers
    P2D: number;
    JAVA2D: number;
    WEBGL: number;
    P3D: number;
    OPENGL: number;
    PDF: number;
    DXF: number;

    // Platform IDs
    OTHER: number;
    WINDOWS: number;
    MAXOSX: number;
    LINUX: number;

    EPSILON: number;

    MAX_FLOAT: number;
    MIN_FLOAT: number;
    MAX_INT: number;
    MIN_INT: number;

    PI: number;
    TWO_PI: number;
    TAU: number;
    HALF_PI: number;
    THIRD_PI: number;
    QUARTER_PI: number;

    DEG_TO_RAD: number;
    RAD_TO_DEG: number;

    WHITESPACE: string;

    // Color modes
    RGB: number;
    ARGB: number;
    HSB: number;
    ALPHA: number;
    CMYK: number;

    // Image file types
    TIFF: number;
    TARGA: number;
    JPEG: number;
    GIF: number;

    // Filter/convert types
    BLUR: number;
    GRAY: number;
    INVERT: number;
    OPAQUE: number;
    POSTERIZE: number;
    THRESHOLD: number;
    ERODE: number;
    DILATE: number;

    // Blend modes
    REPLACE: number;
    BLEND: number;
    ADD: number;
    SUBTRACT: number;
    LIGHTEST: number;
    DARKEST: number;
    DIFFERENCE: number;
    EXCLUSION: number;
    MULTIPLY: number;
    SCREEN: number;
    OVERLAY: number;
    HARD_LIGHT: number;
    SOFT_LIGHT: number;
    DODGE: number;
    BURN: number;

    // Color component bit masks
    ALPHA_MASK: number;
    RED_MASK: number;
    GREEN_MASK: number;
    BLUE_MASK: number;

    // Projection matrices
    CUSTOM: number;
    ORTHOGRAPHIC: number;
    PERSPECTIVE: number;

    // Shapes
    POINT: number;
    POINTS: number;
    LINE: number;
    LINES: number;
    TRIANGLE: number;
    TRIANGLES: number;
    TRIANGLE_STRIP: number;
    TRIANGLE_FAN: number;
    QUAD: number;
    QUADS: number;
    QUAD_STRIP: number;
    POLYGON: number;
    PATH: number;
    RECT: number;
    ELLIPSE: number;
    ARC: number;
    SPHERE: number;
    BOX: number;

    GROUP: number;
    PRIMITIVE: number;
    //PATH:         number; // shared with Shape PATH
    GEOMETRY: number;

    // Shape Vertex
    VERTEX: number;
    BEZIER_VERTEX: number;
    CURVE_VERTEX: number;
    BREAK: number;
    CLOSESHAPE: number;

    // Shape closing modes
    OPEN: number;
    CLOSE: number;

    // Shape drawing modes
    CORNER: number; // Draw mode convention to use (x, y) to (width, height)
    CORNERS: number; // Draw mode convention to use (x1, y1) to (x2, y2) coordinates
    RADIUS: number; // Draw mode from the center, and using the radius
    CENTER_RADIUS: number; // Deprecated! Use RADIUS instead
    CENTER: number; // Draw from the center, using second pair of values as the diameter
    DIAMETER: number; // Synonym for the CENTER constant. Draw from the center
    CENTER_DIAMETER: number; // Deprecated! Use DIAMETER instead

    // Text vertical alignment modes
    BASELINE: number;   // Default vertical alignment for text placement
    TOP: number; // Align text to the top
    BOTTOM: number; // Align text from the bottom, using the baseline

    // UV Texture coordinate modes
    NORMAL: number;
    NORMALIZED: number;
    IMAGE: number;

    // Text placement modes
    MODEL: number;
    SHAPE: number;

    // Stroke modes
    SQUARE: string;
    ROUND: string;
    PROJECT: string;
    MITER: string;
    BEVEL: string;

    // Lighting modes
    AMBIENT: number;
    DIRECTIONAL: number;
    //POINT:     number; Shared with Shape constant
    SPOT: number;

    // Key constants

    // Both key and keyCode will be equal to these values
    BACKSPACE: number;
    TAB: number;
    ENTER: number;
    RETURN: number;
    ESC: number;
    DELETE: number;
    CODED: number;

    // p.key will be CODED and p.keyCode will be this value
    SHIFT: number;
    CONTROL: number;
    ALT: number;
    CAPSLK: number;
    PGUP: number;
    PGDN: number;
    END: number;
    HOME: number;
    LEFT: number;
    UP: number;
    RIGHT: number;
    DOWN: number;
    F1: number;
    F2: number;
    F3: number;
    F4: number;
    F5: number;
    F6: number;
    F7: number;
    F8: number;
    F9: number;
    F10: number;
    F11: number;
    F12: number;
    NUMLK: number;
    META: number;
    INSERT: number;

    // Cursor types
    ARROW: string;
    CROSS: string;
    HAND: string;
    MOVE: string;
    TEXT: string;
    WAIT: string;
    NOCURSOR: string;

    // Hints
    DISABLE_OPENGL_2X_SMOOTH: number;
    ENABLE_OPENGL_2X_SMOOTH: number;
    ENABLE_OPENGL_4X_SMOOTH: number;
    ENABLE_NATIVE_FONTS: number;
    DISABLE_DEPTH_TEST: number;
    ENABLE_DEPTH_TEST: number;
    ENABLE_DEPTH_SORT: number;
    DISABLE_DEPTH_SORT: number;
    DISABLE_OPENGL_ERROR_REPORT: number;
    ENABLE_OPENGL_ERROR_REPORT: number;
    ENABLE_ACCURATE_TEXTURES: number;
    DISABLE_ACCURATE_TEXTURES: number;
    HINT_COUNT: number;

    // PJS defined constants
    SINCOS_LENGTH: number;       // every half degree
    PRECISIONB: number;        // fixed point precision is limited to 15 bits!!
    PRECISIONF: number;
    PREC_MAXVAL: number;
    PREC_ALPHA_SHIFT: number;
    PREC_RED_SHIFT: number;
    NORMAL_MODE_AUTO: number;
    NORMAL_MODE_SHAPE: number;
    NORMAL_MODE_VERTEX: number;
    MAX_LIGHTS: number;

    /*
     * Structure
     */
    draw: any;
    exit: any;
    loop: any;
    noLoop: any;
    pushStyle: any;
    popStyle: any;
    redraw: any;
    setup: any;
    size: any;

    /*
     * Environment
     */
    cursor: any;
    focused: any;
    frameCount: any;
    frameRate: any;
    //frameRate: any;
    height: any;
    noCursor: any;
    online: any;
    screen: any;
    width: any;

    /*
     * Shape - 2D Primitives
     */
    arc: any;
    ellipse: any;
    line: any;
    point: any;
    quad: any;
    rect: any;
    triangle: any;

    /*
     * Shape - Curves
     */
    bezier: any;
    bezierDetail: any;
    bezierPoint: any;
    bezierTangent: any;
    curve: any;
    curveDetail: any;
    curvePoint: any;
    curveTangent: any;
    curveTightness: any;

    /*
     * Shape - 3D Primitives
     */
    box: any;
    sphere: any;
    sphereDetail: any;

    /*
     * Shape - Attributes
     */
    ellipseMode: any;
    noSmooth: any;
    rectMode: any;
    smooth: any;
    strokeCap: any;
    strokeJoin: any;
    strokeWeight: any;

    /*
     * Shape - Vertex
     */
    beginShape: any;
    bezierVertex: any;
    curveVertex: any;
    endShape: any;
    texture: any;
    textureMode: any;
    vertex: any;

    /*
     * Shape - Loading & Displaying
     */
    loadShape: any;
    shape: any;
    shapeMode: any;

    /*
     * Input - Mouse
     */
    mouseButton: any;
    mouseClicked: any;
    mouseDragged: any;
    mouseMoved: any;
    mouseOut: any;
    mouseOver: any;
    mousePressed: any;
    //mousePressed: any;
    mouseReleased: any;
    mouseX: any;
    mouseY: any;
    pmouseX: any;
    pmouseY: any;

    /*
     * Input - Keyboard
     */
    key: any;
    keyCode: any;
    keyPressed: any;
    //keyPressed: any;
    keyReleased: any;
    keyTyped: any;

    /*
     * Input - Files
     */
    createInput: any;
    loadBytes: any;
    loadStrings: any;
    open: any;
    selectFolder: any;
    selectInput: any;

    /*
     * Input - Web
     */
    link: any;
    param: any;
    status: any;

    /*
     * Output - Image
     */
    save: any;
    saveFrame: any;

    /*
     * Output - Files
     */
    //PrintWriter
    beginRaw: any;
    beginRecord: any;
    createOutput: any;
    createReader: any;
    createWriter: any;
    endRaw: any;
    endRecord: any;
    saveBytes: any;
    saveStream: any;
    saveStrings: any;
    selectOutput: any;

    /*
     * Transform
     */
    applyMatrix: any;
    popMatrix: any;
    printMatrix: any;
    pushMatrix: any;
    resetMatrix: any;
    rotate: any;
    rotateX: any;
    rotateY: any;
    rotateZ: any;
    scale: any;
    translate: any;

    /*
     * Lights, Camera - Lights
     */
    ambientLight: any;
    directionalLight: any;
    lightFalloff: any;
    lightSpecular: any;
    lights: any;
    noLights: any;
    normal: any;
    pointLight: any;
    spotLight: any;

    /*
     * Lights, Camera - Camera
     */
    beginCamera: any;
    camera: any;
    endCamera: any;
    frustum: any;
    ortho: any;
    perspective: any;
    printCamera: any;
    printProjection: any;

    /*
     * Lights, Camera - Coordinates
     */
    modelX: any;
    modelY: any;
    modelZ: any;
    screenX: any;
    screenY: any;
    screenZ: any;

    /*
     * Lights, Camera - Material Properties
     */
    ambient: any;
    emissive: any;
    shininess: any;
    specular: any;

    /*
     * Color - Setting
     */
    background: any;
    colorMode: any;
    fill: any;
    noFill: any;
    noStroke: any;
    stroke: any;

    /*
     * Color - Creating & Reading
     */
    alpha: any;
    blendColor: any;
    blue: any;
    brightness: any;
    color: any;
    green: any;
    hue: any;
    lerpColor: any;
    red: any;
    saturation: any;

    /*
     * Image
     */
    createImage: any;

    /*
     * Image - Loading & Displaying
     */
    image: any;
    imageMode: any;
    loadImage: any;
    noTint: any;
    requestImage: any;
    tint: any;

    /*
     * Image - Pixels
     */
    blend: any;
    copy: any;
    filter: any;
    get: any;
    loadPixels: any;
    pixels: any[]
    set: any;
    updatePixels: any;

    /*
     * Rendering
     */
    createGraphics: any;
    hint: any;

    /*
     * Typography - Loading & Displaying
     */
    createFont: any;
    loadFont: any;
    text: any;
    textFont: any;

    /*
     * Typography - Attributes
     */
    textAlign: any;
    textLeading: any;
    textMode: any;
    textSize: any;
    textWidth: any;

    /*
     * Typography - Metrics
     */
    textAscent: any;
    textDescent: any;

    /*
     * Math - Calculation
     */
    abs: any;
    ceil: any;
    constrain: any;
    dist: any;
    exp: any;
    floor: any;
    lerp: any;
    log: any;
    mag: any;
    map: any;
    max: any;
    min: any;
    norm: any;
    pow: any;
    round: any;
    sq: any;
    sqrt: any;

    /*
     * Math - Trigonometry
     */
    acos: any;
    asin: any;
    atan: any;
    atan2: any;
    cos: any;
    degrees: any;
    radians: any;
    sin: any;
    tan: any;

    /*
     * Math - Random
     */
    noise: any;
    noiseDetail: any;
    noiseSeed: any;
    random: any;
    randomSeed: any;
}
