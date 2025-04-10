import heapq

def dijkstra(graph, start, end):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    previous = {node: None for node in graph}

    while pq:
        current_distance, current_node = heapq.heappop(pq)

        if current_node == end:
            path = []
            while current_node:
                path.append(current_node)
                current_node = previous[current_node]
            return path[::-1], current_distance

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            dist = current_distance + weight
            if dist < distances[neighbor]:
                distances[neighbor] = dist
                previous[neighbor] = current_node
                heapq.heappush(pq, (dist, neighbor))

    return None, float('infinity')

# Example usage
graph = {
    'A': {'B': 4, 'C': 2},
    'B': {'A': 4, 'C': 1, 'D': 5},
    'C': {'A': 2, 'B': 1, 'D': 8, 'E': 10},
    'D': {'B': 5, 'C': 8, 'E': 2, 'F': 6},
    'E': {'C': 10, 'D': 2, 'F': 3},
    'F': {'D': 6, 'E': 3}
}

path, distance = dijkstra(graph, 'A', 'F')
print(f"Shortest path: {path}")
print(f"Total distance: {distance}")
