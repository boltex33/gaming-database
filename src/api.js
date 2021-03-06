//Base URL
const base_url = "https://api.rawg.io/api/";

const key = "998de08130f3425fb22984c6e10c6a5b";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () =>
  `${base_url}games?key=${key}${popular_games}`;
export const upcomingGamesURL = () =>
  `${base_url}games?key=${key}${upcoming_games}`;
export const newGamesURL = () => `${base_url}games?key=${key}${new_games}`;
//Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${key}`;
//Game screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${key}`;

//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${key}&search=${game_name}&page_size=9`;
