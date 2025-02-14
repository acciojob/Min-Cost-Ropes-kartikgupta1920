function mincost(arr) {
    if (arr.length === 1) return 0; // If only one rope, no cost is needed.

    const minHeap = new MinPriorityQueue({ priority: x => x });

    // Add all elements to the min heap
    arr.forEach(num => minHeap.enqueue(num));

    let totalCost = 0;

    // Merge ropes until only one remains
    while (minHeap.size() > 1) {
        let first = minHeap.dequeue().element;
        let second = minHeap.dequeue().element;
        let cost = first + second;
        totalCost += cost;
        minHeap.enqueue(cost);
    }

    return totalCost;
}

module.exports = mincost;

