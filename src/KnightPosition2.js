export const chessKnight2 = (block) => {
  let possible_Blocks = [];

  let Block_X = block[0];

  let Block_Y = block[1];

  let Block_X_Positions = [
    Block_X + 2,
    Block_X - 2,
    Block_X + 1,
    Block_X - 1,
  ].filter((block_Position) => {
    return block_Position > 0 && block_Position < 9;
  });

  let Block_Y_Positions = [
    Block_Y + 2,
    Block_Y - 2,
    Block_Y + 1,
    Block_Y - 1,
  ].filter((block_Position) => {
    return block_Position > 0 && block_Position < 9;
  });

  for (let i = 0; i < Block_X_Positions.length; i++) {
    for (let j = 0; j < Block_Y_Positions.length; j++) {
      if (
        Math.abs(Block_X - Block_X_Positions[i]) +
          Math.abs(Block_Y - Block_Y_Positions[j]) ===
        3
      ) {
        console.log(Block_X_Positions[i], Block_Y_Positions[j]);

        if (
          !possible_Blocks.includes([
            Block_X_Positions[i],
            Block_Y_Positions[j],
          ])
        ) {
          possible_Blocks.push(JSON.stringify([Block_X_Positions[i], Block_Y_Positions[j]]));
        }
      }
    }
  }

  return possible_Blocks;
};
