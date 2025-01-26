const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const brushColorInput = document.getElementById('brush-color');
const brushSizeInput = document.getElementById('brush-size');
const bgColorInput = document.getElementById('canvas-bg-color');
const undoButton = document.getElementById('undo');
const clearButton = document.getElementById('clear');
const saveButton = document.getElementById('save');

let drawing = false;
let currentPath = [];
let paths = [];

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set default canvas background color
bgColorInput.value = '#ffffff';

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

function startDrawing(e) {
    drawing = true;
    currentPath = [];
    addPoint(e);
}

function draw(e) {
    if (!drawing) return;
    addPoint(e);
    redraw();
}

function stopDrawing() {
    if (!drawing) return;
    drawing = false;
    paths.push([...currentPath]);
}

function addPoint(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentPath.push({ x, y, color: brushColorInput.value, size: brushSizeInput.value });
}

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = bgColorInput.value || 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    paths.forEach(path => drawPath(path));
    drawPath(currentPath);
}

function drawPath(path) {
    path.forEach((point, index) => {
        if (index === 0) return;
        const prev = path[index - 1];
        ctx.beginPath();
        ctx.strokeStyle = point.color;
        ctx.lineWidth = point.size;
        ctx.lineCap = 'round';
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
    });
}

// Undo functionality
undoButton.addEventListener('click', () => {
    paths.pop();
    redraw();
});

// Clear functionality
clearButton.addEventListener('click', () => {
    paths = [];
    currentPath = [];
    redraw();
});

// Save functionality
saveButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Update canvas background color
bgColorInput.addEventListener('change', redraw);
