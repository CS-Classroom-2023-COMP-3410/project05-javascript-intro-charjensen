document.addEventListener('DOMContentLoaded', () => {
    const visualizer = document.getElementById('visualizer');
    const commentary = document.getElementById('commentary');
    const algorithmSelect = document.getElementById('algorithm-select');
    const speedRange = document.getElementById('speed-range');
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');

    let array = [];
    let isSorting = false;

    // Utility function to generate a random array
    function generateArray(size = 20) {
        array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
        renderArray();
    }

    // Render the bars in the visualizer
    function renderArray() {
        visualizer.innerHTML = '';
        array.forEach(value => {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${value * 3}px`;
            visualizer.appendChild(bar);
        });
    }

    // Update commentary section
    function updateCommentary(message) {
        commentary.textContent = message;
    }

    // Bubble Sort Implementation
    async function bubbleSort() {
        const bars = document.querySelectorAll('.bar');
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                updateCommentary(`Comparing elements at index ${j} and ${j + 1}`);
                if (array[j] > array[j + 1]) {
                    bars[j].classList.add('active');
                    bars[j + 1].classList.add('active');

                    // Swap values
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    await sleep(100 - speedRange.value);
                    renderArray();

                    updateCommentary(`Swapped elements at index ${j} and ${j + 1}`);
                    bars[j].classList.remove('active');
                    bars[j + 1].classList.remove('active');
                }
            }
        }
        updateCommentary("Bubble Sort complete!");
    }

    // Insertion Sort Implementation
    async function insertionSort() {
        const bars = document.querySelectorAll('.bar');
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;

            updateCommentary(`Selected element at index ${i} for insertion`);
            while (j >= 0 && array[j] > key) {
                updateCommentary(`Comparing key with element at index ${j}`);
                bars[j].classList.add('active');
                array[j + 1] = array[j];
                await sleep(100 - speedRange.value);
                renderArray();
                bars[j].classList.remove('active');
                j--;
            }
            array[j + 1] = key;
            updateCommentary(`Inserted element at index ${j + 1}`);
        }
        updateCommentary("Insertion Sort complete!");
    }

    // Merge Sort Implementation
    async function mergeSort(start = 0, end = array.length - 1) {
        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);
        updateCommentary(`Dividing array into [${start}, ${mid}] and [${mid + 1}, ${end}]`);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
    }

    async function merge(start, mid, end) {
        updateCommentary(`Merging arrays [${start}, ${mid}] and [${mid + 1}, ${end}]`);
        const temp = [];
        let i = start, j = mid + 1;

        while (i <= mid && j <= end) {
            if (array[i] <= array[j]) {
                temp.push(array[i++]);
            } else {
                temp.push(array[j++]);
            }
        }

        while (i <= mid) temp.push(array[i++]);
        while (j <= end) temp.push(array[j++]);

        for (let k = start; k <= end; k++) {
            array[k] = temp[k - start];
            renderArray();
            await sleep(100 - speedRange.value);
        }
        updateCommentary(`Merge complete for range [${start}, ${end}]`);
    }

    // Quick Sort Implementation
    async function quickSort(start = 0, end = array.length - 1) {
        if (start >= end) return;

        const pivotIndex = await partition(start, end);
        updateCommentary(`Partitioned array with pivot at index ${pivotIndex}`);
        await quickSort(start, pivotIndex - 1);
        await quickSort(pivotIndex + 1, end);
    }

    async function partition(start, end) {
        const pivot = array[end];
        let i = start - 1;
        updateCommentary(`Choosing pivot element at index ${end}`);

        for (let j = start; j < end; j++) {
            updateCommentary(`Comparing element at index ${j} with pivot`);
            if (array[j] <= pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
                renderArray();
                await sleep(100 - speedRange.value);
                updateCommentary(`Swapped elements at index ${i} and ${j}`);
            }
        }

        [array[i + 1], array[end]] = [array[end], array[i + 1]];
        renderArray();
        await sleep(100 - speedRange.value);
        return i + 1;
    }

    // Bogo Sort Implementation
    async function bogoSort() {
        while (!isSorted()) {
            updateCommentary("Shuffling array randomly");
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            renderArray();
            await sleep(100 - speedRange.value);
        }
        updateCommentary("Bogo Sort complete! Array is sorted.");
    }

    function isSorted() {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) return false;
        }
        return true;
    }

    // Sleep function for animation
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Start sorting
    startButton.addEventListener('click', () => {
        if (isSorting) return;
        isSorting = true;
        commentary.textContent = "Sorting in progress...";

        const algorithm = algorithmSelect.value;
        if (algorithm === 'bubble') {
            bubbleSort().then(() => (isSorting = false));
        } else if (algorithm === 'insertion') {
            insertionSort().then(() => (isSorting = false));
        } else if (algorithm === 'merge') {
            mergeSort().then(() => {
                isSorting = false;
                commentary.textContent = "Merge Sort complete!";
            });
        } else if (algorithm === 'quick') {
            quickSort().then(() => {
                isSorting = false;
                commentary.textContent = "Quick Sort complete!";
            });
        } else if (algorithm === 'bogo') {
            bogoSort().then(() => (isSorting = false));
        }
    });

    // Reset the array
    resetButton.addEventListener('click', () => {
        if (isSorting) return;
        generateArray();
        commentary.textContent = "Array reset. Choose an algorithm and start sorting!";
    });

    // Initialize
    generateArray();
});