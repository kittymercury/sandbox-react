export function getImg(fileName) {
  return fileName
    ? require(`./tg-imgs/${fileName}`)
    : require(`./tg-imgs/no-avatar.png`);
}
