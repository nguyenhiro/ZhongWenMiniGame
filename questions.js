import level1Questions from './levels/level1.js';
import level2Questions from './levels/level2.js';

const questionsByLevel = {
  1: level1Questions,
  2: level2Questions,
};

// Export toàn bộ đối tượng ra ngoài
export { questionsByLevel };
