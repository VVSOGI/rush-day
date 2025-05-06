/**
 * 그래프의 모양을 간선의 정보만으로 구하는 법
 * 막대 모양 그래프는 나가는 간선 없이 들어오는 간선만 있는 노드가 존재한다.
 * 8자 모양 그래프는 나가는 간선과 들어오는 간선이 둘 다 두 개 이상 있는 노드가 존재한다.
 * 루트 노드의 나가는 간선의 갯수는 전체 그래프의 갯수이니 막대와 8자를 구한 다음 전체에서 빼면 도넛 모양 그래프의 갯수이다.
 */
function solution(edges) {
  const graph = {};
  const result = [0, 0, 0, 0];

  for (const [exit, entry] of edges) {
    if (!graph[exit]) {
      graph[exit] = [1, 0];
    } else {
      graph[exit][0] += 1;
    }

    if (!graph[entry]) {
      graph[entry] = [0, 1];
    } else {
      graph[entry][1] += 1;
    }
  }

  for (const [key, value] of Object.entries(graph)) {
    const [exit, entry] = value;

    if (exit > entry && exit > 1) {
      result[0] = Number(key);
    }

    if (exit === 0 && entry > 0) {
      result[2] += 1;
    }

    if (entry >= 2 && exit >= 2) {
      result[3] += 1;
    }
  }

  const root = graph[String(result[0])];
  const totalGraph = root[0];
  result[1] = totalGraph - result[2] - result[3];

  return result;
}

console.log(
  solution([
    [2, 3],
    [4, 3],
    [1, 1],
    [2, 1],
  ])
);
