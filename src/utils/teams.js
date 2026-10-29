// teams.json tek kaynak: "active": false olan takım sitede hiçbir yerde görünmez
let teamsPromise = null;
let cachedTeams = null;

// eski linkler kırılmasın diye
const teamAliases = {
  grideayazilim: "gridea",
  "typhoon-helikopter": "typhoon-iha",
};

export const getCachedActiveTeams = () => cachedTeams;

export const fetchActiveTeams = () => {
  if (!teamsPromise) {
    teamsPromise = fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => {
        cachedTeams = data.filter((team) => team.active !== false);
        return cachedTeams;
      })
      .catch((err) => {
        teamsPromise = null;
        throw err;
      });
  }
  return teamsPromise;
};

export const findTeam = (teams, teamName) => {
  const param = teamName.toLowerCase();
  return teams?.find((team) => {
    const key = team.key.toLowerCase();
    return key === param || teamAliases[param] === key;
  });
};
