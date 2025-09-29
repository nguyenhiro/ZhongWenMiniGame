import level1Questions from './levels/level1.js';
import level2Questions from './levels/level2.js';
import level3Questions from './levels/level3.js';
import level4Questions from './levels/level4.js';
import level5Questions from './levels/level5.js';
import level6Questions from './levels/level6.js';
import level7Questions from './levels/level7.js';
import level8Questions from './levels/level8.js';
import level9Questions from './levels/level9.js';
import level10Questions from './levels/level10.js';

const questionsByLevel = {
  1: level1Questions,
  2: level2Questions,
  3: level3Questions,
  4: level4Questions,
  5: level5Questions,
  6: level6Questions,
  7: level7Questions,
  8: level8Questions,
  9: level9Questions,
  10: level10Questions,
};

// Export toàn bộ đối tượng ra ngoài
export { questionsByLevel };
