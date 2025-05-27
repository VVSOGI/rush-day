function solution(user_id, banned_id) {
  const dp = new Set();
  let total = 0;

  function checkName(username, banname) {
    if (username.length !== banname.length) return false;

    for (let i = 0; i < username.length; i++) {
      if (banname[i] === "*") continue;
      if (username[i] !== banname[i]) return false;
    }

    return true;
  }

  function dfs(index, visited) {
    if (index === banned_id.length) {
      const result = [...visited].sort().join();
      if (!dp.has(result)) {
        dp.add(result);
        total += 1;
      }
      return;
    }

    const target = banned_id[index];
    for (let i = 0; i < user_id.length; i++) {
      if (!visited.has(user_id[i]) && checkName(user_id[i], target)) {
        const find = [...visited, user_id[i]];
        find.sort();
        dfs(index + 1, new Set(find));
      }
    }
  }

  dfs(0, new Set());

  return total;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]));
